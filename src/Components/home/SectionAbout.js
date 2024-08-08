import { useTranslation } from "react-i18next";
import $ from 'jquery';
import { useEffect } from "react";
import { Link } from "react-router-dom";
function SecAbout() {
  useEffect(()=>{
    var windowHeight = $(window).height();
    $('.img').height(windowHeight);

})
  const { t } = useTranslation();
  return (
    <>
      <section className="flex flex-2 container mr-200">

            <div
              className="abouttext"
             
            >
              <h6 data-aos="fade-down-right"
              data-aos-easing="ease-in-sine">{t("About us")}</h6>
              <h1 data-aos="fade-right"
              data-aos-easing="ease-in-sine">{t("COMPANY OVERVIEW")}</h1>
              <p data-aos="fade-right"
              data-aos-easing="ease-in-sine">
              {t("aboutp1")}
<br/><br/>
{t("aboutp2")}
              </p>
              <div className="flex flex-2 container mr-30" style={{justifyContent:"space-evenly"}}>
              <a className="read" href = {require("../../Assets/pdf/KB-Catalogue.pdf")} target = "_blank">{t("read_more")}</a>

                  <Link className="question" to="/Contact">{t("Get A Quotation")}</Link>
              </div>
            </div>
            <div  className="img" style={{backgroundImage:`url(${require("../../Assets/background/Edge-112.jpg")})`}}>
            </div>

      </section>
    </>

  );
}

export default SecAbout;