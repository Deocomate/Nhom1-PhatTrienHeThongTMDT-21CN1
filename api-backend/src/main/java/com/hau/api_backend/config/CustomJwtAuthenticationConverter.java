package com.hau.api_backend.config;

import com.hau.api_backend.entity.InvalidatedToken;
import com.hau.api_backend.repository.InvalidatedRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtException;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class CustomJwtAuthenticationConverter implements Converter<Jwt, AbstractAuthenticationToken> {

    private final InvalidatedRepository invalidatedRepository;

    @Override
    public AbstractAuthenticationToken convert(Jwt jwt) {
        // Check if the token is invalidated
        Optional<InvalidatedToken> invalidatedToken = invalidatedRepository.findById(jwt.getId());
        if (invalidatedToken.isPresent()) {
            // Token is invalidated, reject authentication
            throw new JwtException("Token has been invalidated");
        }

        List<SimpleGrantedAuthority> authorities = getAuthorities(jwt);
        return new JwtAuthenticationToken(jwt, authorities);
    }

    private List<SimpleGrantedAuthority> getAuthorities(Jwt jwt) {
        Object authoritiesClaim = jwt.getClaims().get("authorities");

        if (authoritiesClaim instanceof List<?> authoritiesList) {
            return authoritiesList.stream()
                    .filter(String.class::isInstance)
                    .map(String.class::cast)
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toList());
        }

        return Collections.emptyList();
    }
}