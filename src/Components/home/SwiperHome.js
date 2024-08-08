import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import $ from 'jquery';

function SwiperHome() {
  const { t } = useTranslation();
  const vidref=useRef();

  useEffect(() => { 
      var windowHeight = $(window).height();
      $('.HomeBanner').height(windowHeight);
      AOS.init();
      vidref.current.defaultPlaybackRate = 2.0;
      vidref.current.play();
      vidref.current.playbackRate = 2.25;
  
  },[]);

  useEffect(() => {
  
  }, [])
  return (
    <div className="HomeBanner">
      <div className="shadow">

      </div>
        <video className="Video" ref={ vidref }  src={require("../../Assets/video/homevideo.mp4")} playsInline loop autoPlay  muted />

<div className="social">
  <h1>{t("sliderp")}</h1>
  <p>{t("sliderp2")}</p>
</div>
    </div>
  );
}

export default SwiperHome;
