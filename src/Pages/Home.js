
import SwiperHome from "../Components/home/SwiperHome";
import SecAbout from "../Components/home/SectionAbout";

import Brands from "../Components/home/Brands";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Homeservice from "../Components/Homeservice";
function Home(params) {
  const { t } = useTranslation();

    return <>
     
     <SwiperHome />

      <SecAbout />
    
    
      <div className="flex flex-1 container mr-100 " >

        <p data-aos="fade-down">{t("homesection")}</p>
        <Link className="question" to="/Contact">{t("Get A Quotation")}</Link>

      
      </div>
      

      


      


      <Homeservice p={t("planninghead")} h={t("Kitchen design and planning")} i="Kitchen-Design-and-Planning.png"/>
      <Homeservice h={t("Cabinet refacing and replacement")} i="Cabinet-Refacing-and-Replacement.png" p={t('rephead')} />
      <Homeservice h={t("Countertop installation")} i="Countertop-Installation.png" p={t("installhead")} />
      <Homeservice h={t("Backsplash installation")} i="Backsplash-Installation.png" p={t("installhead2")} />
      <Homeservice h={t("Lighting installation")} i="Lighting-Installation.png" p={t("installhead3")} />
      <Homeservice h={t("Appliance selection")} i="Appliance-Selection.png" p={t("selection")} />
      <Homeservice h={t("Project management")} i="Project-Management.png" p={t("manigment")} />
      <div  >
      <div className="flex flex-2 container aline-item mr-200" >
        <div>
        <h2 className="maincolor">{t("LUXURY ITALIAN FURNISHINGS")}</h2>
        </div>
      <div>
        <p>{t("luxuryp")}</p>
      </div>
      </div></div>

       <Brands/>
     {/* <SecWhy />
      <SectionProducts />
      <SwiperTeam />
      <Clients/> */}
    </>
}
export default Home;