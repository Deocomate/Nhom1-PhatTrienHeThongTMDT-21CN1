"use client"

import AccountPage from "@/pages/account/AccountPage";
import React from "react";
import withAuth from "@/auth/withAuth";

function page() {
    return (<>
        <AccountPage></AccountPage>
    </>);
}

export default withAuth(page);
