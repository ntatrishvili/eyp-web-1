import React from 'react';
import "../Styles/Footer.css"
const Footer = () => {
    return(
        <div className = "main-footer">
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h4>Contact</h4>
                        <ul className='list-unstyled'>
                            <li>+995 LIZIS/ANAS NOMERI?</li>
                            <li>Tbilisi, Georgia</li>
                            <li>Tchavchavadze str. 45?</li>
                            <li>info@eyp.org.ge</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Useful Links</h4>
                        <ul className='list-unstyled'>
                            <li>EYP umbrella organisation</li>
                            <li>EYP members platform</li>
                            <li>Schwarzkopf Foundation</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>more stuff</h4>
                        <ul className='list-unstyled'>
                            <li>+995 599080101</li>
                            <li>Kutaisi, Georgia</li>
                            <li>dzveli skola ragac str. 45?</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} EYP Georgia | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;