"use client"
import React from "react";
import { WishlistPage } from "@/pages/wishlist/WishListPage";
import withAuth from "@/auth/withAuth";

function page() {
  return (
    <>
      <WishlistPage></WishlistPage>
    </>
  );
}

export default withAuth(page)

