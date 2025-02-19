package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.request.CustomerCreationRequest;
import com.hau.api_backend.dto.response.CustomerResponse;
import com.hau.api_backend.entity.Customer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CustomerMapper {
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Customer toCustomer(CustomerCreationRequest customer);

    CustomerResponse toCustomerResponse(Customer customer);
}
