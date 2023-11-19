import React from "react";
import FindCustomerOffer from "../findCustomerOffer/FindCustomerOffer";
import ProductCards from "../productCards/ProductCards";
import Footer from "./footer";

const MainPage = () => {
    return (
        <>
            <FindCustomerOffer />
            <ProductCards />
            <Footer mainpageColor={'rgb(22,22,23)'} />
        </>
    )
}

export default MainPage;