import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';

import { useTranslation } from "react-i18next";
export default function Homeservice(params) {
    const { t } = useTranslation();
    useEffect(()=>{
        var windowHeight = $(window).height();
        $('.homecut .img').height(windowHeight/2);
    })
    return <div  className="mr-200 homecut container flex flex-2">
          <div
              className="abouttext cut mr-30"
             
            >

            <h6 data-aos="fade-down-right"
              data-aos-easing="ease-in-sine">{t("KITCHENS")}</h6>
              <h1 data-aos="fade-right"
              data-aos-easing="ease-in-sine">{t(params.h)}</h1>
              <p data-aos="fade-right"
              data-aos-easing="ease-in-sine">
             {params.p}</p>
              <div className="container mr-30" style={{justifyContent:"space-evenly"}}>
                  <a  className="question" href = {require("../Assets/pdf/KB-Catalogue.pdf")} target = "_blank">{t("View Cataloge")}</a>

              </div>

            </div>
           
            <div data-aos="flip-right" className="img" style={{backgroundImage:`url(${require("../Assets/background/"+params.i)})`}}>
            </div>
    </div>
}