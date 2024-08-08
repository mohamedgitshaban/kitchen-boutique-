import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';

import { useTranslation } from "react-i18next";
export default function Cut(params) {
    const { t } = useTranslation();
    useEffect(()=>{
        var windowHeight = $(window).height();
        $('#cut .img').height(windowHeight/2);
        $('#cut .img2').height(windowHeight/2);
    })
    return<div className=" mr-200" id="cut"> <div  className="container flex flex-2">
          <div
              className="abouttext cut"
             
            >
            <div>
            <h6 data-aos="fade-down-right"
              data-aos-easing="ease-in-sine">{t("KITCHENS")}</h6>
              <h1 data-aos="fade-right"
              data-aos-easing="ease-in-sine">{t("THE CUT")}</h1>
              <p data-aos="fade-right"
              data-aos-easing="ease-in-sine">
             {t("THE CUTp")}</p>
              <div className="container mt-30" style={{justifyContent:"space-evenly"}}>
                  <Link className="question" to="">{t("View Cataloge")}</Link>
              </div>
            </div> <div  className="img2" style={{backgroundImage:`url(${require("../Assets/background/Edge-51.jpg")})`}}>
            </div>
            
            </div>
           
            <div  className="img" style={{backgroundImage:`url(${require("../Assets/background/217267049_215439913789765_1974011708208055536_n.jpg")})`}}>
            </div>
    </div></div>
}