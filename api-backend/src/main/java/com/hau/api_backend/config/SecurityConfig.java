package com.hau.api_backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.crypto.spec.SecretKeySpec;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final String[] PUBLIC_POST_ENDPOINTS = {"/api/auth/login", "/api/auth/logout", "/api/auth/introspect", "/api/customers", "/api/orders", "/api/customerCares",

    };

    private final String[] PUBLIC_GET_ENDPOINTS = { "/api/products", "/api/products/{productId}/thumbnail",
            "/api/products/{productId}/images", "/api/products/{id}",
            "/api/comments", "/api/blog_category", "api/blog_category/getBlogCategoryBySlug/{slug:[a-zA-Z0-9-]+}",
            "/api/comments/product/{id}", "/api/vnpay/vnpay_return",
            "/api/products/slug/{slug}",
            "/api/categories", "/api/categories/parent",
            "/api/categories/slug/{parentSlug}", "/api/categories/productWithCategory",
            "/api/categories/productWithCategory/{categorySlug}",
            "/api/categories/{slug}",
            "/api/products/getAllProductByCategoryId/{categoryId}",
            "api/blog", "/api/blog/getBlogBySlug/{slug:[a-zA-Z0-9-]+}", "api/products/search", "/api/products/category/{id}",


    };

    private final String[] PUBLIC_DELETE_ENDPOINTS = {""};

    @Value("${jwt.signerKey}")
    private String signerKey;

    private final CustomJwtAuthenticationConverter customJwtAuthenticationConverter;

    public SecurityConfig(CustomJwtAuthenticationConverter customJwtAuthenticationConverter) {
        this.customJwtAuthenticationConverter = customJwtAuthenticationConverter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.authorizeHttpRequests(request -> request.requestMatchers(HttpMethod.POST, PUBLIC_POST_ENDPOINTS).permitAll().requestMatchers(HttpMethod.GET, PUBLIC_GET_ENDPOINTS).permitAll().requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() // Cho phép OPTIONS requests
                .anyRequest().authenticated());

        httpSecurity.oauth2ResourceServer(oauth2 -> oauth2.jwt(jwtConfigurer -> jwtConfigurer.jwtAuthenticationConverter(customJwtAuthenticationConverter)));

        httpSecurity.cors(cors -> cors.configurationSource(corsConfigurationSource())); // Enable CORS
        httpSecurity.csrf(AbstractHttpConfigurer::disable);
        return httpSecurity.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Collections.singletonList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    JwtDecoder jwtDecoder() {
        SecretKeySpec secretKeySpec = new SecretKeySpec(signerKey.getBytes(), "HS512");

        return NimbusJwtDecoder.withSecretKey(secretKeySpec).macAlgorithm(MacAlgorithm.HS512).build();
    }
}