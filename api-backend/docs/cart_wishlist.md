GET: /api/cart/getCartByCustomerId/{customer_id}
```
[
    {
        "product": {
            id,name
        }
        "quantity: 1
    },
    {
        "product": {
            id,name
        }
        "quantity: 1
    },
    ...
]
```

POST: /api/cart/updateCartByCustomerId
post data:
```
{
    customer_id: customer_id,
    "cartDetails": [
        {
        "productId": 1,
        "quantity": 2
        },
        {
        "productId": 2,
        "quantity": 2
        }
    ]
}
```
