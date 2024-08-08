
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Clients() {
    const [rr, Setcc] = useState(2);
    useEffect(() => {
        if (window.innerWidth > 900) {
            Setcc(2);
        }
        else if (window.innerWidth > 700) {
            Setcc(1);
        }
        else if (window.innerWidth > 600) {
            Setcc(1);
        }
        else {
            Setcc(1);
        }
    }, [])
    useEffect(() => {
        if (window.innerWidth > 1100) {
            Setcc(2);
        }
        else if (window.innerWidth > 700) {
            Setcc(1);
        }
        else if (window.innerWidth > 600) {
            Setcc(1);
        }
        else {
            Setcc(1);
        }
        window.addEventListener('resize', handleWindowResize);

    }, [window.innerWidth])
    const handleWindowResize = () => {
        if (window.innerWidth > 1100) {
            Setcc(2);
        }
        else if (window.innerWidth > 700) {
            Setcc(1);
        }
        else if (window.innerWidth > 600) {
            Setcc(1);
        }
        else {
            Setcc(1);
        }
    }

    return (
        <>
            <div className="what">
                <div className="container">
                    <div className="Clients">
                        <h1 className='w0'>What our clients are saying</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="body10">
                <Swiper
                    pagination={{
                        clickable: true,

                    }}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: true,
                    }}
                    slidesPerView={rr}

                    spaceBetween={10}

                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{ width: "1100" }}>
                        <div class="codepen-wrapper">
                            <figure class="review">
                                <blockquote class="review__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                                </blockquote>
                                <figcaption class="review__person">
                                    <div class="review__info">
                                        <p class="review__info--name">Nikki Smith</p>
                                        <p class="review__info--date"> April 26, 2020</p>
                                    </div>
                                    <div class="review__rating">
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "1100" }}>
                        <div class="codepen-wrapper">
                            <figure class="review">
                                <blockquote class="review__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                                </blockquote>
                                <figcaption class="review__person">
                                    <div class="review__info">
                                        <p class="review__info--name">Nikki Smith</p>
                                        <p class="review__info--date"> April 26, 2020</p>
                                    </div>
                                    <div class="review__rating">

                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "1100" }}>
                        <div class="codepen-wrapper">
                            <figure class="review">
                                <blockquote class="review__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                                </blockquote>
                                <figcaption class="review__person">
                                    <div class="review__info">
                                        <p class="review__info--name">Nikki Smith</p>
                                        <p class="review__info--date"> April 26, 2020</p>
                                    </div>
                                    <div class="review__rating">

                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "1100" }}>
                        <div class="codepen-wrapper">
                            <figure class="review">
                                <blockquote class="review__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                                </blockquote>
                                <figcaption class="review__person">
                                    <div class="review__info">
                                        <p class="review__info--name">Nikki Smith</p>
                                        <p class="review__info--date"> April 26, 2020</p>
                                    </div>
                                    <div class="review__rating">

                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide style={{ width: "1100" }}>
                        <div class="codepen-wrapper">
                            <figure class="review">
                                <blockquote class="review__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                                </blockquote>
                                <figcaption class="review__person">
                                    <div class="review__info">
                                        <p class="review__info--name">Nikki Smith</p>
                                        <p class="review__info--date"> April 26, 2020</p>
                                    </div>
                                    <div class="review__rating">

                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                        <FontAwesomeIcon icon={faStar} color='gold' fontSize={"20px"} />
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    );
}

export default Clients;