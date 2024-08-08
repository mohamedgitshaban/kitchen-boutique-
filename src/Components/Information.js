import AOS from 'aos';
import $ from 'jquery';

import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Information() {
        useEffect(() => {
                AOS.init();
                var windowHeight = $(window).height();
                $('.contactusheader').height(windowHeight/1.2);
              }, [])
    return ( <div className='contactusheader' style={{backgroundImage:`url(${require("../Assets/events/marce.png")})`}}>
<div className='social'>
    <div className="flex flex-4">

    <div className='col-lg-3 col-md-8 col-xs-12 'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
    <i class="fa-solid fa-location-dot icons " ></i>
            <p className="text">95 Abu Bakr Al Seddek ST., Safir Square, Heliopolis.</p>
    </div>
    <div className='col-lg-3 col-md-8 col-xs-12 'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="700" >
    <i class="fa-solid fa-envelope  icons "></i>
            <p className="text">info@staronegypt.com.eg</p>


    </div>
    <div className='col-lg-3 col-md-8 col-xs-12 'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="900">
    <i class="fa-solid fa-phone  icons"></i>
            <p className="text">
            +201090029220
            </p>

    </div>
    <div className='col-lg-3 col-md-8 col-xs-12 'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1100">
    <i class="fa-solid fa-earth-africa icons" ></i>
    <p className="text"><a className="Bakr"  href="/">XYZ GROUP</a></p>  
    </div>


    </div>
    
    
    
    
    
    </div>

    </div> );
}

export default Information;