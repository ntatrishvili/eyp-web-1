import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			{/* <img src = '../public/logo_EYP.png' alt = 'EYP logo'/> */}
			<img src = './logo_EYP2.png' alt='logo' height='80px'/>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">News</a>
				<a href="/#">About EYP</a>
				<a href="/#">Partners</a>
                <a href="/#">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;