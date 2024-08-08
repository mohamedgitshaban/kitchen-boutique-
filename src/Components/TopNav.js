import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
function TopNav() {
    const { t } = useTranslation();

    return ( <>
    

    <div className="TopNavbar " >
    
   <div className='container flex flex-2'>
   <div className='information '>
    <a className='tag'><i className="fa-solid fa-phone ph"></i> +201090029220</a>
    <a className='tag'><i className="fa-regular fa-envelope enve"></i> info@straronegypt.com.eg</a>
    </div>
    <Link  to='/Contact' className='btn hvr-underline-from-left'>{t("Contact_Us")}</Link>

   </div>


    </div>
    
    
    
    
    
    
    </> );
}

export default TopNav;