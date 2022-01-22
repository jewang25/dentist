import React from 'react'; // requires a loader
import Link from 'react';
import './toothbrushGallery.css'

import Carousel from "react-slick";

import image0 from '../components/img/toothbrushGallery/tn_p0.jpg';
import image1 from '../components/img/toothbrushGallery/tn_p1.jpg';
import image2 from '../components/img/toothbrushGallery/tn_p2.jpg';
import image3 from '../components/img/toothbrushGallery/tn_p3.jpg';
import image4 from '../components/img/toothbrushGallery/tn_p4.jpg';
import image5 from '../components/img/toothbrushGallery/tn_p5.jpg';
import image6 from '../components/img/toothbrushGallery/tn_p6.jpg';
import image7 from '../components/img/toothbrushGallery/tn_p7.jpg';
import image8 from '../components/img/toothbrushGallery/tn_p8.jpg';
import image9 from '../components/img/toothbrushGallery/tn_p9.jpg';
import image10 from '../components/img/toothbrushGallery/tn_p10.jpg';
import image11 from '../components/img/toothbrushGallery/tn_p11.jpg';
import image12 from '../components/img/toothbrushGallery/tn_p12.jpg';
import image13 from '../components/img/toothbrushGallery/tn_p13.jpg';
import image14 from '../components/img/toothbrushGallery/tn_p14.jpg';
import image15 from '../components/img/toothbrushGallery/tn_p15.jpg';
import image16 from '../components/img/toothbrushGallery/tn_p16.jpg';
import image17 from '../components/img/toothbrushGallery/tn_p17.jpg';
import image18 from '../components/img/toothbrushGallery/tn_p18.jpg';
import image19 from '../components/img/toothbrushGallery/tn_p19.jpg';
import image20 from '../components/img/toothbrushGallery/tn_p20.jpg';
import image21 from '../components/img/toothbrushGallery/tn_p21.jpg';
import image22 from '../components/img/toothbrushGallery/tn_p22.jpg';

import { useEffect, useRef } from "react";

const data = [
  { img: "../components/img/toothbrushGallery/tn_p0.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p1.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p2.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p3.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p4.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p5.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p6.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p7.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p8.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p9.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p10.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p11.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p12.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p13.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p14.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p15.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p16.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p17.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p18.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p19.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p20.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p21.jpg" },
  { img: "../components/img/toothbrushGallery/tn_p22.jpg" }
]

const settings = {
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

};
function ToothbrushGallery({ slideIndex }) {
  const slider = useRef();
  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
    console.log(slideIndex);
  }, [slideIndex]
  );

  return (
    <div id="mainGallery" >
      <h1>护齿手册</h1>
      <Carousel {...settings} ref={slider}>

        <img src={image1} className="imgslider" alt-text='image1' />
        <img src={image2} className="imgslider" alt-text='image1' />
        <img src={image3} className="imgslider" alt-text='image1' />
        <img src={image4} className="imgslider" alt-text='image1' />
        <img src={image5} className="imgslider" alt-text='image1' />
        <img src={image6} className="imgslider" alt-text='image1' />
        <img src={image7} className="imgslider" alt-text='image1' />
        <img src={image8} className="imgslider" alt-text='image1' />
        <img src={image9} className="imgslider" alt-text='image1' />
        <img src={image10} className="imgslider" alt-text='image1' />
        <img src={image11} className="imgslider" alt-text='image1' />
        <img src={image12} className="imgslider" alt-text='image1' />
        <img src={image13} className="imgslider" alt-text='image1' />
        <img src={image14} className="imgslider" alt-text='image1' />
        <img src={image15} className="imgslider" alt-text='image1' />
        <img src={image16} className="imgslider" alt-text='image1' />
        <img src={image17} className="imgslider" alt-text='image1' />
        <img src={image18} className="imgslider" alt-text='image1' />
        <img src={image19} className="imgslider" alt-text='image1' />

        <img src={image21} className="imgslider" alt-text='image1' />
        <img src={image22} className="imgslider" alt-text='image1' />

      </Carousel>
    </div >
  );
}
ToothbrushGallery.defaultProps = {
  slideIndex: 0
};
export default ToothbrushGallery;



