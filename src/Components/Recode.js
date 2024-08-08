import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';

import { useTranslation } from "react-i18next";
export default function Recorde(params) {
    const { t } = useTranslation();
    useEffect(()=>{
        var windowHeight = $(window).height();
        $('.img').height(windowHeight);
    })
    return<div id="record" className="container flex flex-2 mr-200">
          <div
              className="abouttext recode mr-30"
             
            >
            <div>
            <h6 data-aos="fade-down-right"
              data-aos-easing="ease-in-sine">{t("KITCHENS")}</h6>
              <h1 data-aos="fade-right"
              data-aos-easing="ease-in-sine">{t("RECORD CUCINE")}</h1>
              <p data-aos="fade-right"
              data-aos-easing="ease-in-sine">
             {t("RECORD CUCINEp")}</p>
              <div className="container mt-30"data-aos="flip-right" style={{justifyContent:"space-evenly"}}>
                  <Link className="question" to="">{t("View Cataloge")}</Link>
              </div>
            </div>
              <div  className="img2" style={{backgroundImage:`url(${require("../Assets/background/Edge-1.jpg")})`}}>
            </div>
            </div>
            <div  className="img" style={{backgroundImage:`url(${require("../Assets/background/Edge-40.jpg")})`}}>
            </div>
    </div>
}