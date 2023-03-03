import React from 'react';
import "../Styles/About.css"
import AboutEYPBanner from '../partner_logos/AboutEYPBanner.jpg'



function About (){
    return (
        <div className='container'>
            <img src={AboutEYPBanner} alt='EYP Banner' className='AboutEYPBanner' key="0"></img>
            <h1 key={1}>
                EYP Georgia is an organisation!
            </h1>
            {/* <div className='card'>
                <div className='aboutInfo'>
                    <div className='newsHeader'>The International Network</div>
                    <div className='newsInfo'>
                        <div className='newsText'>The European Youth Parliament has been working all around Europe for more than 35 years now. </div>
                    </div>
                </div>
                <img src='AboutEYPBanner' alt='about' className='AboutImage'></img>
            </div> */}
        </div>
    )


}

export default About;