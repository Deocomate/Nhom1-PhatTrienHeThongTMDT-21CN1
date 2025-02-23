package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.request.customerRequest.CustomerCreationRequest;
import com.hau.api_backend.dto.request.customerRequest.CustomerUpdateRequest;
import com.hau.api_backend.dto.response.CustomerResponse;
import com.hau.api_backend.entity.Customer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface CustomerMapper {
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Customer toCustomer(CustomerCreationRequest customer);

    @Mapping(target = "email", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    void updateCustomer(@MappingTarget Customer customer, CustomerUpdateRequest customerUpdateRequest);

    CustomerResponse toCustomerResponse(Customer customer);
}
