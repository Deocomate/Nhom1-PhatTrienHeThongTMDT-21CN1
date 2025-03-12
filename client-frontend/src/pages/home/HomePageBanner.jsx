import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import Image from "next/image";

export const HomePageBanner = () => {
    const bannerImages = ["/assets/default/homepage-banner-1.png", "/assets/default/homepage-banner-2.png"];

    return (<>
        <section className={"py-3"}>
            <div className="parent">
                <div className="div1">
                    <Swiper
                        loop={true}
                        spaceBetween={5}
                        slidesPerView={1}
                    >
                        {bannerImages.map((image, index) => (<SwiperSlide key={index}>
                            <img src={image} style={{
                                width: "100%", objectFit: "cover",
                            }} alt={`Banner ${index + 1}`}/>
                        </SwiperSlide>))}
                    </Swiper>
                </div>
                <div className="div2">
                    <img src="/assets/default/homepage-banner-right-1.png"
                         style={{width: '100%', height: '100%', objectFit: 'cover'}} alt=""/>
                </div>
                <div className="div3">
                    <img src="/assets/default/homepage-banner-right-2.png"
                         style={{width: '100%', height: '100%', objectFit: 'cover'}} alt=""/>
                </div>
            </div>
        </section>
        <style jsx>{`
            .parent {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 1fr);
                grid-column-gap: 10px;
                grid-row-gap: 10px;
                height: 500px; /*  Keep a fixed height, or use min-height */
            }

            .div1 {
                grid-area: 1 / 1 / 3 / 3;
                position: relative; /*  Important for the absolute positioning of the images */
            }

            .div2 {
                grid-area: 1 / 3 / 2 / 4;
            }

            .div3 {
                grid-area: 2 / 3 / 3 / 4;
            }

            .swiper-slide-inner {
                height: 100%; /* Make the wrapper fill the slide */
                position: relative; /*  For absolute positioning of the image inside */
            }

            .div1 {
                display: flex;
                align-items: center;
            }

            @media (max-width: 768px) {
                .div2, .div3 {
                    display: none;
                }

                .parent {
                    display: block;
                    height: auto;
                }

            }
        `}</style>
    </>);
};

export default HomePageBanner;