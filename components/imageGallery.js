import React from 'react'; // requires a loader
import Carousel from "react-slick";
import './imageGallery.css'

import image1 from '../components/img/photoGallery/photo0.JPG';
import image2 from '../components/img/photoGallery/photo1.JPG';
import image3 from '../components/img/photoGallery/photo2.JPG';
import image4 from '../components/img/photoGallery/photo4.JPG';
import image5 from '../components/img/photoGallery/photo5.JPG';
import image6 from '../components/img/photoGallery/photo6.JPG';
import image7 from '../components/img/photoGallery/photo7.JPG';
import image8 from '../components/img/photoGallery/photo8.JPG';
import image9 from '../components/img/photoGallery/photo9.JPG';
import image10 from '../components/img/photoGallery/photo10.JPG';
import image11 from '../components/img/photoGallery/photo11.JPG';
import image12 from '../components/img/photoGallery/photo12.JPG';
import image13 from '../components/img/photoGallery/photo13.JPG';
import image14 from '../components/img/photoGallery/photo14.JPG';
import image15 from '../components/img/photoGallery/photo15.JPG';
import image16 from '../components/img/photoGallery/photo16.JPG';
import image17 from '../components/img/photoGallery/photo17.JPG';
import image18 from '../components/img/photoGallery/photo18.JPG';
import image19 from '../components/img/photoGallery/photo19.JPG';
import image21 from '../components/img/photoGallery/photo21.JPG';
import image22 from '../components/img/photoGallery/photo22.JPG';
import image23 from '../components/img/photoGallery/photo23.JPG';


const settings = {
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const imageCarousel = () => {
  return (
    <div id="headerGallery" >
      <Carousel {...settings}  >
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
        <img src={image23} className="imgslider" alt-text='image1' />
      </Carousel>
    </div >
  );
}

export default imageCarousel;



