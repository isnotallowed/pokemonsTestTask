import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
	const [isActive, setActive] = useState(false);

	const toggleMenu = () => {
		setActive(!isActive);
	};

	return (
		<header className={isActive ? "header mobile-active" : "header"}>
			<div className="container">
				<nav className="navigation">
					<Link to="/">
						<img
							className="navigation__logo"
							alt="logo"
							src="../images/logo.png"
						/>
					</Link>
					<div className="navigation__links">
						<Link className="navigation__links__item" to="/">
							Home page
						</Link>
						<Link className="navigation__links__item" to="/pokemons">
							Pokemon list
						</Link>
					</div>
				</nav>
				<nav className="mobile-navigation">
					<div className="mobile-top">
						<Link to="/">
							<img
								className="navigation__logo"
								alt="logo"
								src="../images/logo.png"
							/>
						</Link>
						<button className="mobile-top__button" onClick={toggleMenu}>
							<svg
								width="28"
								height="16"
								viewBox="0 0 28 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									width="28"
									height="2.66667"
									rx="1.33333"
									fill="url(#paint0_linear)"
								/>
								<rect
									y="13.3333"
									width="28"
									height="2.66667"
									rx="1.33333"
									fill="url(#paint1_linear)"
								/>
								<rect
									x="8"
									y="6.66666"
									width="20"
									height="2.66667"
									rx="1.33333"
									fill="url(#paint2_linear)"
								/>
								<defs>
									<linearGradient
										id="paint0_linear"
										x1="14"
										y1="-1.03101"
										x2="14"
										y2="2.66667"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0.250579" stop-color="#3DADFF" />
										<stop offset="1" stop-color="#0691E0" />
									</linearGradient>
									<linearGradient
										id="paint1_linear"
										x1="14"
										y1="12.3023"
										x2="14"
										y2="16"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0.250579" stop-color="#3DADFF" />
										<stop offset="1" stop-color="#0691E0" />
									</linearGradient>
									<linearGradient
										id="paint2_linear"
										x1="18"
										y1="5.63565"
										x2="18"
										y2="9.33332"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0.250579" stop-color="#3DADFF" />
										<stop offset="1" stop-color="#0691E0" />
									</linearGradient>
								</defs>
							</svg>
						</button>
					</div>
					<div className="mobile-content">
						<Link onClick={toggleMenu} className="mobile-content__item" to="/">
							Home page
						</Link>
						<Link
							onClick={toggleMenu}
							className="mobile-content__item"
							to="/pokemons"
						>
							Pokemon list
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;
