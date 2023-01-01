import { useRef } from "react";
import "../Styles/Navbar.css";
import {Link} from 'react-router-dom'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};       

	const pages = [
		{link: '', txt: 'Home'},
		{link: 'news', txt: 'News'}, 
		{link:'about', txt:'About EYP'}, 
		{link:'partners', txt:'Partners'},
		{link:'contact', txt:'Contact'}];

	return (
		<header>
			<div className="container">
				<img src = '.\logo_EYP.png' alt='EYP logo' height='80px' className="logo"/>
				<nav ref={navRef}>
					{pages.map((pg, num) => {
						//return <a href={"/"+lnk} key={num}>{txt}</a> //varianti 1
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