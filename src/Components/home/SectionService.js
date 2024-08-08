import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function SecServices() {
  const { t } = useTranslation();
    return (
      <section className="container mr-200">
        
        <div className="header">
          <h1>{t("Kitchen Boutique Services")}</h1>
        </div>
        <div className="flex flex-3">
          <div className="item" style={{backgroundImage:`url(${require("../../Assets/background/Lighting-Installation.png")})`}} data-aos="fade-down-right">  
            <div className="shadow">
           
            </div>
            
            <div className="text">
                <h2>{t("Kitchen design and planning")}</h2>
                <p>
                {t("servicep1")}
                </p>
            </div>
          </div>
          <div className="item" style={{backgroundImage:`url(${require("../../Assets/background/Cabinet-Refacing-and-Replacement.png")})`}} data-aos="fade-down">  
            <div className="shadow">
           
            </div>
            
            <div className="text">
                <h2>{t("Cabinet refacing and replacement")}</h2>
                <p>
                {t("servicep2")}
                </p>
            </div>
          </div>
          <div className="item" style={{backgroundImage:`url(${require("../../Assets/background/Countertop-Installation.png")})`}} data-aos="fade-down-left">  
            <div className="shadow">
           
            </div>
           
            <div className="text">
                <h2>{t("Countertop installation")}</h2>
                <p>
                {t("servicep3")}
                </p>
            </div>
          </div>
          <div className="item" style={{backgroundImage:`url(${require("../../Assets/background/Backsplash-Installation.png")})`}} data-aos="fade-up-right">  
            <div className="shadow">
           
            </div>
            
            <div className="text">
                <h2>{t("Backsplash installation")}</h2>
                <p>
                {t("servicep4")}
                </p>
            </div>
          </div>
          <div className="item" style={{backgroundImage:`url(${require("../../Assets/background/Kitchen-Design-and-Planning.png")})`}} data-aos="fade-up">  
            <div className="shadow">
            
            </div>
            
            <div className="text">
                <h2>{t("Lighting installation")}</h2>
                <p>
                {t("servicep5")}
                </p>
            </div>
          </div>
          <div className="item" style={{backgroundImage:`url(${require("../../Assets/background/Appliance-Selection.png")})`}} data-aos="fade-up-left">  
            <div className="shadow">
            
            </div>
           
            <div className="text">
                <h2>{t("Appliance selection")}</h2>
                <p>
                {t("servicep6")}
                </p>
            </div>
          </div>
          <div className="item  wid-2" style={{backgroundImage:`url(${require("../../Assets/background/Project-Management.png")})`}} data-aos="fade-up-right">  
            <div className="shadow">
            
            </div>
           
 
            <div className="text">
                <h2>{t("Project management")}</h2>
                <p>
                {t("servicep7")}

                </p>
            </div>
          </div>
          <div className="item" style={{backgroundColor:"rgb(27, 75, 68)"}} data-aos="fade-up-left">            
            <div className="social">
            

                <Link to="/Contact">
                <i class="fa-solid fa-arrow-right"></i><br/>
                  {t("get in touch")}
                </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-2 container mr-100" style={{justifyContent:"space-evenly"}}>
              <Link className="read" style={{padding:"15px 30px"}} to="">{t("read_more")}</Link>
              </div>
      </section>
    );

}

export default SecServices;