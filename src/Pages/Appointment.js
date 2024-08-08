import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import Information from '../Components/Information';

import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Appointment() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();

  }, [])
return ( <>
<div className='contact'>
 <Information/>
 </div>
    <div className="container">
    
    <form className='from' >
    <h1 className="typ">{t("nav_bar_Appointment")}</h1>
                    <form>
    
    <div data-aos="fade-up"
     data-aos-duration="700" className="group">      
      <input type="text" required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Name</label>
    </div>
      
    <div data-aos="fade-up"
     data-aos-duration="800" className="group">      
      <input type="text" required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Email</label>

    </div>
    <div data-aos="fade-up"
     data-aos-duration="900" className="group">      
      <input type="intiger" required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Phone</label>
      </div>
      <div data-aos="fade-up"
     data-aos-duration="1000" className="group">      
      <input type="datetime-local" required  className="datetime"/>
      <span class="highlight"></span>
      <span class="bar"></span>
      </div>
  
      <Button variant="primary "data-aos="fade-up"
     data-aos-duration="900" className="send" >{t("submit")} </Button>{''}
    
    
  </form>
                
                     
                     

     
                      </form>

    </div>
       
    </> );
}

export default Appointment;