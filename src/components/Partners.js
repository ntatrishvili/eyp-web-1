import React from 'react';
import "../Styles/Partners.css"
import ESlogo from '../assets/logos/partner_logos/ESlogo.png'
import green_movement_logo from '../assets/logos/partner_logos/green_movement_logo.png'
import green_gift_logo from '../assets/logos/partner_logos/green_gift_logo.png'
import parki_ar_minda_logo from '../assets/logos/partner_logos/parki_ar_minda_logo.png'
import spar_logo from '../assets/logos/partner_logos/spar_logo.png'
import tbilisi_clean_ups_logo from '../assets/logos/partner_logos/tbilisi_clean_ups_logo.png'
import Slider from "react-slick";

const Partners = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slider",
        draggable: true,
        focusOnSelect: true,
        slide: 'img',
        swipeToSlide: true,
        vertical: false
      };
    const images = <div className='partners'>
        {/* {Sponsors(ESlogo,"European School Tbilisi")} */}
        <img className='partner' src={ESlogo} alt="European School Tbilisi" height='100px'/>
            <img className='partner' src={green_movement_logo} alt="green movement"height='100px'/>
            <img className='partner' src={green_gift_logo} alt="green gift" height='100px'/>
            <img className='partner' src={parki_ar_minda_logo} alt="parki ar minda" height='100px'/>
            <img className='partner' src={spar_logo} alt="spar georgia" height='100px'/>
            <img className='partner' src={tbilisi_clean_ups_logo} alt="Tbilisi clean ups" height='100px'/>
    </div>
    return(<>
        <div className='container'>
            <h1 className='Header'>Current Partners</h1>
            {/* {images} */}
            <Slider {...settings}>
                {images}
            </Slider>
        </div>
    </>
    )
}

export default Partners;