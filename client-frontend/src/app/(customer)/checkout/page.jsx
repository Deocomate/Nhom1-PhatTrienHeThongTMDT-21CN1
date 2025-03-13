"use client"
import CheckoutPage from "@/pages/checkout/CheckoutPage";
import React from "react";
import withAuth from "@/auth/withAuth";

export function page() {
    return (<>
        <CheckoutPage></CheckoutPage>
    </>);
}

export default withAuth(page);
