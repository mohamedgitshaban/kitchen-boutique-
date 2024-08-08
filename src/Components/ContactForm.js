import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();

    return ( <div className='contactform'>
     <div className="flex flex-2 mr-100" >
 
    <div className='from mr-30'>
    <form className='Massage' >
                    <h1>{t("Contact_Us")}</h1>
         
    
    <div class="group" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">      
      <input type="text" required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Name</label>
    </div>
      
    <div class="group" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">      
      <input type="text" required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Email</label>

    </div>
    <div class="group"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">      
      <input type="textarea" required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Message</label>
      </div>
    
  
      <Button data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" variant="primary " className='send' >{t("submit")}</Button>{''}
    
    

                
                     
              
     
                      </form>

    </div>
    <div className='map mr-30'  >     
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13807.691931047362!2d31.3398!3d30.096392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815f1026341ad%3A0xc4ed2f9fe11d252c!2s10%20Srabis%2C%20Almazah%2C%20Heliopolis%2C%20Cairo%20Governorate%204460376!5e0!3m2!1sen!2seg!4v1696926107761!5m2!1sen!2seg" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                </div>


    </div>
    </div> );
}

export default ContactForm;