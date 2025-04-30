"use client";

import Banner from "@/components/banner/Banner2";
import OfferBanners from "@/components/banner/OfferBanners2";
import LatestBlog from "@/components/blog/LatestBlog";
import Deal from "@/components/deal/Deal2";
import HeroSlider from "@/components/hero/HeroSlider2";
import Services from "@/components/service/Services2";
import NewArrivals from "@/components/arrivals/NewArrivals";
import Category from "@/components/category/Category2";

const page = () => {
    return (
        <>
            <HeroSlider />
            <Category />
            <Deal />
            <Banner />
            <NewArrivals />
            <OfferBanners />
            <Services />
            {/* <LatestBlog /> */}
        </>
    )
}

export default page
