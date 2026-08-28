import Image from "next/image";
import HomeBanner from "./component/home-components/HomeBanner";
import HomeLayout from "./component/home-components/HomeLayout";
import Featured from "./component/home-components/Featured";
import Bestselling from "./component/home-components/Bestselling";
import TrendingBanner from "./component/home-components/Trendding_collection";
import FreeShipping from "./component/home-components/FreeShipping";
import Customers from "./component/home-components/Customers";


export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeLayout />
     
      <Featured />
      <TrendingBanner/>
      <Bestselling/>
      <FreeShipping/>
      <Customers/>
   
    </>

  );
}
