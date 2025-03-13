"use client"
import React, {Fragment} from "react";
import {ProductsByCategoryCarousel} from "@/pages/home/ProductsByCategoryCarousel";
import {HomePageBanner} from "@/pages/home/HomePageBanner";
import {MostSearch} from "@/pages/home/MostSearch";
import {HomePageSubBanner} from "@/pages/home/HomePageSubBanner";
import {HomePageBlogs} from "@/pages/home/HomePageBlogs";

const HomePage = () => {

    return (<>
        <div className={"container"}>
            <section className={"homepage-banner"}>
                <HomePageBanner></HomePageBanner>
            </section>
            <section className={"py-3"}>
                <ProductsByCategoryCarousel></ProductsByCategoryCarousel>
            </section>
            <section className={"py-3"}>
                <ProductsByCategoryCarousel></ProductsByCategoryCarousel>
            </section>
            <section className={"py-3"}>
                <MostSearch></MostSearch>
            </section>
            <section className={"py-3"}>
                <HomePageSubBanner></HomePageSubBanner>
            </section>
            <section className={"py-3"}>
                <HomePageBlogs></HomePageBlogs>
            </section>
        </div>
    </>);
};

export default HomePage;