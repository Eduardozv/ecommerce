"use client";

import Banner from "@/components/banner/Banner";
import OfferBanners from "@/components/banner/OfferBanners";
import LatestBlog from "@/components/blog/LatestBlog";
import Deal from "@/components/deal/Deal2";
import HeroSlider from "@/components/hero/HeroSlider2";
import Services from "@/components/service/Services";
import Trending from "@/components/trending/Trending";
import NewArrivals from "@/components/arrivals/NewArrivals";
import NewsletterModal from "@/components/model/NewsletterModal";

const page = () => {
    return (
        <>
            <HeroSlider />
            <Deal />
            <Banner />
            <NewArrivals />
            <OfferBanners />
            <Services />
            <Trending />
            <LatestBlog />
        </>
    )
}

export default page
