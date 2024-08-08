import { useTranslation } from "react-i18next";
import $ from 'jquery';
import { Link } from 'react-router-dom';

import { useEffect } from "react";
export default function AboutUs() {
    const { t } = useTranslation();

    useEffect(()=>{
        var windowHeight = $(window).height();
        $('.aboutus').height(windowHeight);
        $('.img').height(windowHeight*0.8);
        $('#cut .img').height(windowHeight/1.3);
        $('#cut .img2').height(windowHeight/1.5);
    })
    return<>
    <div className="aboutus ">
     <div className="flex flex-2"> 
      <div className="text">
            <h6>{t("About us")}</h6>
            <h1>{t("COMPANY OVERVIEW")}</h1>
            <p>
            {t("aboutp1")}
            </p> <p>
            {t("aboutp2")}
            </p>
        </div>

             <img className="img"  src={require("../Assets/background/b2bbfc8a8e7f285eba9b13d80ce699b3.jpg")}/>
<br/>
        </div> 
    </div>


    <div className="aboutussection">
            <h6 data-aos="zoom-in">{t("Our Brands")}</h6>
            <h1 data-aos="flip-up">{t("brandh")}</h1>
            <p data-aos="zoom-in">
            {t("brandp")}</p> 
        </div>
        <div className=" mr-200" id="cut">
             <div  className="container flex flex-2">
          <div
              className="abouttext cut"
             
            >
            <div>
            <h6 data-aos="fade-down-right"
              data-aos-easing="ease-in-sine">{t("Kitchen Boutique")}</h6>
              <h1 data-aos="fade-right"
              data-aos-easing="ease-in-sine">{t("MiaInstallation")}</h1>
              <p data-aos="fade-right"
              data-aos-easing="ease-in-sine">
             {t("mainstallationp")}</p>
             
            </div> <div data-aos="flip-right" className="img2" style={{backgroundImage:`url(${require("../Assets/background/19f0ed796b208be85308a2e420d2f4ec.jpg")})`}}>
            </div>
            
            </div>
           
            <div data-aos="flip-right" className="img" style={{backgroundImage:`url(${require("../Assets/background/868a7a9c72f2c9d73507fc4608025834.jpg")})`}}>
            </div>
    </div></div>
    <div className="flex flex-2 container">
        <div className="item" data-aos="zoom-out-right">
            <h1>
            {t("Vision")}
            </h1>
            <p>
            {t("Visionp")}
                </p>
        </div>
        <div className="item" data-aos="zoom-out-left">
            <h1>
            {t("Mission")}
            </h1>
            <p>
            {t("Missionp")}            </p>
        </div>
    </div>
    </>
}