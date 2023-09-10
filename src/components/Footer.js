import React from 'react';
import "../Styles/Footer.css"

const Sponsors = (props) =>
{
    return (
        <>
            <img className='partner' src={props.src} alt = {props.alt} height ='100px'/>
        </>
    );
}

function Footer () {
    return(
        <div className = "main-footer">
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='footer-title'>Contact</div>
                        <ul className='list-unstyled'>
                            <li>+995 555 93 76 65</li>
                            <li>Tbilisi, Georgia</li>
                            <li>36 I. Chavchavadze Avenue</li>
                            <li>info@eyp.org.ge</li>
                        </ul>
                    </div>
                    <div className='col'>
                    <div className='footer-title'>Useful Links</div>
                        <ul className='list-unstyled'>
                            <li> <a className='link' href="http://www.eyp.org" target={"_blank"}>EYP umbrella organisation</a></li>
                            <li> <a className='link' href="http://www.members.eyp.org" target={"_blank"}>EYP members platform</a></li>
                            <li> <a className='link' href="https://schwarzkopf-stiftung.de/en/" target={"_blank"}>Schwarzkopf Foundation</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                    <div className='footer-title'>Information</div>
                        <ul className='list-unstyled'>
                            <li>Data protection</li>
                            <li>Imprint</li>
                            <li>Transparency</li>
                        </ul>
                    </div>
                </div>
                {/*<hr/>
                 <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} EYP Georgia | Terms of Service | Privacy
                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default Footer;