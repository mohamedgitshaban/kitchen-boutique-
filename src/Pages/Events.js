
import $ from 'jquery';
import { useEffect } from "react";
function Events() {
    useEffect(()=>{
        var windowHeight = $(window).height();
        $('.banner').height(windowHeight);
    })
    return (
<>
<div className="banner" style={{backgroundImage:`url(${require("../Assets/background/Edge-137.jpg")})`}}>
        <div className="shadow"></div>
        <div className="section">
          
            <h4 style={{"color":"#fff"}}>Events</h4>
        </div>
    </div>

<section class="ftco-section mr-200">
			<div class="container">
				<div class="row">
          <div class="col-lg-12">
          	<div class="row">
			  <div class="col-md-4 "data-aos="fade-down">
            <div class="blog-entry">
              <a href="blog-single.html" class="block-20" style={{backgroundImage:`url(${require("../Assets/events/marce.png")})`}}>
              </a>
              <div class="text d-flex py-4">
                <div class="meta mb-3">
                  <div><a href="#">MAR 2023</a></div>
                  
                  
                </div>
                <div class="desc pl-3">
	                <h3 class="heading"><a href="#">LE MARCHE EVENT</a></h3>
	              </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 "data-aos="fade-down"data-aos-delay="100">
            <div class="blog-entry" data-aos-delay="100">
              <a href="blog-single.html" class="block-20" style={{backgroundImage:`url(${require("../Assets/events/thedesign.jpg")})`}}>
              </a>
              <div class="text d-flex py-4">
                <div class="meta mb-3">
                  <div><a href="#">JUNE 2023</a></div>
                  
                  
                </div>
                <div class="desc pl-3">
	                <h3 class="heading"><a href="#">THE DESIGN SHOW</a></h3>
	              </div>
              </div>
            </div>
          </div>
		         
          	</div>
          
          </div>

     
        </div>
			</div>
		</section>
</>
    );
  }
  
  export default Events;
  