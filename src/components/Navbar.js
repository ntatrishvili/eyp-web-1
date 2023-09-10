import { useRef } from "react";
import React from 'react'
import "../Styles/Navbar.css";
import {Link, RouterLink} from 'react-router-dom'
import eyp_logo from '../assets/logos/eyp_logos/20150422_JL_Georgia-1C-noBG-wide (1).png'
 
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
	navRef.current.classList.toggle("responsive_nav");
	};       
	const pages = [
		{link: 'news', txt: 'News'}, 
		{link:'who_we_are', txt:'Who we are'}, 
		{link:'what_we_do', txt:'What we do'}, 
		{link:'partners', txt:'Partners'},
		{link:'contact', txt:'Contact'}];

	return (
		<header>
			<div className="navbar_container">
				
				<Link to="/">
					<img src = {eyp_logo} alt='EYP logo' className="logo"/> 
				</Link>
				
			
				<nav ref={navRef}>
						<div className='buttons'>
							{pages.map((pg, num) => {
								return (
									<>
									<Link to={pg.link} key={num}>
										<button className='menu-btn'>
											{pg.txt}
										</button>
									</Link>
								</>
								)
							})}
						</div>
						
									</nav>
				{/* <button className="nav-menu-btn" onClick={showNavbar}>
					<FaBars />
				</button>
				<button
						className="nav-close-btn"
						onClick={showNavbar}>
						<FaTimes />
				</button> */}
			</div>
		</header>
	);
}

export default Navbar;