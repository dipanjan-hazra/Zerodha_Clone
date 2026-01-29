import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { Link } from "react-router-dom";
import Universe from "./Universe";
import OpenAccount from "../OpenAccount";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl="media/Images/kite.png"
        productName="Kite"
        productDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="http://localhost:3000/"
        LernMore="http://localhost:3000/"
        playStore="#"
        appStore="#"
      />
      <RightSection
        Name="Console"
        Des="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        linkName="Learn More"
        link=""
        image="media/Images/console.png"
      />
      <LeftSection
        imgUrl="media/Images/coin.png"
        productName="Coin"
        productDes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#"
        LernMore="#"
        playStore="#"
        appStore="#"
      />
      <RightSection
        Name="Kite Connect API"
        Des="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        linkName="Kite Connect"
        link=""
        image="media/Images/landing.svg"
      />
      <LeftSection
        imgUrl="media/Images/varsity.png"
        productName="Varsity mobile"
        productDes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="#"
        LernMore="#"
        playStore="#"
        appStore="#"
      />
      <p className = "text-center" style={{fontSize:"1.5rem",color:"#424242"}}>Want to know more about our technology stack? Check out the <Link style={{textDecoration:"none"}}>Zerodha.tech blog</Link>.</p>
      <Universe/>
       <div className="row text-center">
            <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"15%",margin:"0 auto", backgroundColor:"#387ED1"}}>Sign up for free</button>
        </div>
    </>
  );
}

export default ProductPage;
