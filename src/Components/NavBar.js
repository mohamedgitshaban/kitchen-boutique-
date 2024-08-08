import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Languagecheack from './Languagecheack';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import $ from 'jquery';

function NavBar() {
  const { t } = useTranslation();
  const [scrollPosition, getScrollPositon] = useState(document.documentElement.scrollTop);

  useEffect(() => {
    var $window = $(window);
    $(".nav-link").click(function() {
      // Check if the collapsible element is currently open
      if (!$(".navbar-toggler").hasClass("collapsed")) {
          // Collapse the navbar
          $(".navbar-toggler").click();
      }
  
      // Your existing code to handle the active class and scrolling
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

    $window.on('scroll', function () {
      getScrollPositon(document.documentElement.scrollTop);
      if ($window.scrollTop() > 300) {
        $('.navbar').addClass('sticky');
      } else {
        $('.navbar').removeClass('sticky');
      }
    });

    $("a").on('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    });
  }, [])

  return (
    <>
      <Navbar expand="lg">
        <div className='container'>
          <Link className="nav-link hvr-icon-hang" to="/" >
            <img
              src={scrollPosition < 300 ? require("../Assets/logo/1-01.png") : require("../Assets/logo/1-02.png")}
              alt="Icon"
              className="icon"
              id="icon"
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav>
              <Link className="nav-link hvr-icon-hang" to="/" >
                {t("Home")}
              </Link>
              <Link to="/about" className="nav-link hvr-icon-hang" >
                {t("About us")}
              </Link>
              <Link className="nav-link hvr-icon-hang" to="/Services" >
                {t("Our Services")}
              </Link>
              <Link className="nav-link hvr-icon-hang" to="/Products" >
                {t("Products")}
              </Link>
              <Link className="nav-link hvr-icon-hang" to="/Event" >
                {t("Events")}
              </Link>
              <Link to="/Appointment" className="nav-link hvr-icon-hang" >
                {t("Schedule An Appointment")}
              </Link>
              <Link><Languagecheack /></Link>
            </Nav>
          </Navbar.Collapse>
          
        </div>
      </Navbar>
      
    </>
  );
}

export default NavBar;
