import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer () {
    const { t } = useTranslation();

    return ( <>
    <footer className="Footer  " >
        <div className="flex flex-3 " data-aos="fade-right">
    <div className="container" >
    <img src={require("../Assets/logo/1-02.png")}/>   
         <p>{t("aboutp1")}</p>
        
        </div>
    <div data-aos="fade-up-left">
    <div className="container ">
        <div className="row ">
        <h1>{t("Navigetions")}</h1>
        <Link className="Home" to='/'>{t("Home")}</Link>
       
        <Link className="Home" to='/Whystaron'>{t("About us")}</Link>
        <Link className="Home" to='/WhyRez'>{t("Our Services")}</Link>
        <Link className="Home" to='/WhyHpl'>{t("Products")}</Link>
        <Link className="Home" to='/WhyVanle'>{t("Events")}</Link>
        <a  className="Home" href = {require("../Assets/pdf/KB-Catalogue.pdf")} target = "_blank">{t("View Cataloge")}</a>
        </div>
      
    </div>
    </div>
    <div data-aos="fade-up-left">
    <div className="container ">
        <div className="row ">
        <h1>{t("sister_company")}</h1>
    
        <Link className="Home" to='/'>XYZ Design Contractors</Link>
        </div>
        <div className="row mt-30">
        <h1>{t("company")}</h1>
        <Link className="Home" to='https://darfadar.com'target="blank">Darfadar</Link>
       
        <a className="Home" href='https://staronegypt.com.eg/'target="blank">Staron Egypt</a>
       
        </div>
        <div className="socialfooter mt-30">
         <h1>{t("social_With_us")}</h1>
        <a href="https://www.facebook.com/kitchenboutique.eg?mibextid=zLoPMf" target="blank"><i className="fa-brands fa-facebook-f facebook"></i></a>
        <a href="http://wa.me/+201090029220"target="blank"><i class="fa-brands fa-whatsapp whatsapp"></i></a>
        <a href="https://www.instagram.com/kitchenboutique.eg/?igsh=MWRjNGxsczY3c2xhZA%3D%3D"target="blank"> <i className="fa-brands fa-instagram instagram"></i></a>

        <a href="https://eg.linkedin.com/company/staron-egypt"target="blank"> <i class="fa-brands fa-linkedin-in linkedin"></i></a>
   
         </div>
    </div>
    </div>

    </div>
   
      
    <div className="sign">
        Kitchen Botique Egypt © All Rights Reserved 2023


        </div> 
            </footer>
            
            
    </>
     );
}

export default Footer ;