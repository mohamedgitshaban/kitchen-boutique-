
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
function Brands() {
    const { t } = useTranslation();

    const [cc,Setcc]=useState(4);
    useEffect(()=>{
      if(window.innerWidth>900){
      Setcc(4);
    }
    else if(window.innerWidth>700){
      Setcc(3);
    }
    else if(window.innerWidth>600){
      Setcc(2);
    }
    else{
      Setcc(1);
    }
    },[])
    useEffect(()=>{
     
      window.addEventListener('resize', handleWindowResize);
    
      },[window.innerWidth])
      const handleWindowResize=()=>{
        if(window.innerWidth>1100){
          Setcc(5);
        }
        else if(window.innerWidth>900){
          Setcc(4);
        }
        else if(window.innerWidth>600){
          Setcc(3);
        }
        else{
          Setcc(1);
        }
      }
    return (
        <>

<div className='OurBrand mr-200' data-aos="fade-up">
<div className="header">

<h1><h6>{t("LOOK TO")}</h6> {t("partners")}</h1>
</div>

<Swiper 
  slidesPerView={cc}
  spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
      
        loop
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
  

  className="mySwiper-1"
>


<SwiperSlide><img src={require("../../Assets/brand/inoxfera.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/mkdmmk.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/pomdor.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/serdanelli.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/faraana.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/shg.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/poggenpohl.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/bosch.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/fagor.png")}/></SwiperSlide>      
<SwiperSlide><img src={require("../../Assets/brand/giellesse.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/kohler.png")}/></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/AKSProfil.png")}  /></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/Crown.png")}  /></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/Lotte.png")}  /></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/Radianz.png")}  /></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/staron.png")}  /></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/tarkett.png")}  /></SwiperSlide>
<SwiperSlide><img src={require("../../Assets/brand/cristal-bronze.png")} /></SwiperSlide>

</Swiper>

</div>        </>
    );
}

export default Brands;

