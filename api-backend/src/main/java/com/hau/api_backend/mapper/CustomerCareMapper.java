package com.hau.api_backend.mapper;


import com.hau.api_backend.dto.request.customerCare.CustomerCareCreationRequest;
import com.hau.api_backend.dto.response.CustomerCareResponse;
import com.hau.api_backend.entity.CustomerCare;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface CustomerCareMapper {
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    CustomerCare toCustomerCare(CustomerCareCreationRequest customerCareCreationRequest);

    CustomerCareResponse toCustomerCareResponse(CustomerCare customerCare);
}
