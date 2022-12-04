import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import ExcitingFeatures from "sections/exciting-features";
import WorkHard from "sections/work-hard";
import UltimateFeatures from "sections/ultimate-features";
import HappyCustomer from "sections/happy-customer";
import Blog from "sections/blog";
import SubscribeUs from "sections/subscribe-us";
import Image from "next/image";
import telebirr from "assets/images/telebirr.png";

export default function IndexPage() {
  return (
   
    < div >
      <Image
        //   loader={myLoader}
        src={telebirr}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

const styles = {
    telebirrbg: {
        minWidth: ["auto", null, null, null, null, "1024px"],
          /* Set rules to fill background */
          minHeight: ["auto", null, null, null, null, "100%"],

        //   minWidth: "1024px",
            
          /* Set up proportionate scaling */
        //   width: 100%;
        //   height: auto;
            
        //   /* Set up positioning */
        //   position: fixed;
        //   top: 0;
        //   left: 0;
        
        
       
        
        }
}