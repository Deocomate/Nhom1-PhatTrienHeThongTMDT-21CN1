"use client"
import React, {Fragment, useEffect, useState} from "react";
import {ProductsByCategoryCarousel} from "@/pages/home/ProductsByCategoryCarousel";
import {HomePageBanner} from "@/pages/home/HomePageBanner";
import {MostSearch} from "@/pages/home/MostSearch";
import {HomePageSubBanner} from "@/pages/home/HomePageSubBanner";
import {HomePageBlogs} from "@/pages/home/HomePageBlogs";
import apiService from "@/lib/api/apiService";

const HomePage = () => {

    let [homePageData, setHomePageData] = useState({
        "topBanner": [],
        "banner2": "",
        "banner3": "",
        "category1Banner": "",
        "category1Title": "",
        "category1Id": "",
        "category2Banner": "",
        "category2Title": "",
        "category2Id": "",
        "mostSearches": []
    })

    const fetchHomePageData = async () => {
        const response = await apiService.get("/homepage")
        if (response.code === 200) {
            let homePageDataResponse = response.data
            homePageDataResponse.topBanner = JSON.parse(homePageDataResponse.topBanner)
            homePageDataResponse.mostSearches = JSON.parse(homePageDataResponse.mostSearches)
            setHomePageData(homePageDataResponse)

            console.log(homePageDataResponse)
        } else {

        }
    }

    useEffect(() => {
        fetchHomePageData().then()
    }, []);

    return (<>
        <div className={"container"}>
            <section className={"homepage-banner"}>
                <HomePageBanner homePageData={homePageData}></HomePageBanner>
            </section>
            <section className={"py-3"}>
                <ProductsByCategoryCarousel
                    banner={homePageData.category1Banner}
                    title={homePageData.category1Title}
                    categoryId={homePageData.category1Id}
                ></ProductsByCategoryCarousel>
            </section>
            <section className={"py-3"}>
                <ProductsByCategoryCarousel
                    banner={homePageData.category2Banner}
                    title={homePageData.category2Title}
                    categoryId={homePageData.category2Id}
                ></ProductsByCategoryCarousel>
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