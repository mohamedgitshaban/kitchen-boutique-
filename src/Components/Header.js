import { useTranslation } from "react-i18next";
import $ from 'jquery';
import { useEffect } from "react";
export default function Header(params) {
    useEffect(()=>{
        var windowHeight = $(window).height();
        $('.banner').height(windowHeight);
    })
    const { t } = useTranslation();
    return<div className="banner" style={{backgroundImage:`url(${require("../Assets/background/Edge-137.jpg")})`}}>
        <div className="shadow"></div>
        <div className="section">
            <h6>{("ITALIAN LUXURY")}</h6>
            <h4>{t("KITCHENS")}</h4>
            <p>{t("servicep")}</p>
             <p><span className="text">{t('Explore')} </span><span className="link"> <a href="#cut">{t("THE CUT")}</a></span> <span className="">|</span><span className="text">{t("Explore")} </span><span className="link"> <a href="#record">{t("RECORD CUCINE")}</a></span> </p>   
        </div>
    </div>
}