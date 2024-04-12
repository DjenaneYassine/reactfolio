import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [showModal, SetShowModal] = useState(false);

	const toggleModal = () => {
		SetShowModal(!showModal);
	};

	return (
		<React.Fragment>
			<div className="nav-container">
				<div
					className={`fixed inset-0 overflow-y-auto bg-black ${
						showModal ? "show" : "hidden"
					}`}
					style={{ zIndex: "5000" }}
				>
					<div className="flex justify-center min-h-screen">
						<div
							className="fixed bg-white h-80 w-11/12 rounded-lg p-8 mt-6 flex flex-col justify-between"
							style={{ zIndex: "5001" }}
						>
							{/* Contenu de votre modal */}
							<div className="flex w-full justify-between">
								<h5 className="text-sm font-bold text-zinc-600">
									Menu
								</h5>
								<button onClick={toggleModal}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="black"
										class="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M6 18 18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<div className="flex flex-col mt-4">
								<a
									className="text-sm font-bold text-zinc-600 py-2"
									href="/"
								>
									Accueil
								</a>
								<div className="border-b my-2"></div>
								<a
									className="text-sm font-bold text-zinc-600 py-2"
									href="/projects"
								>
									Project
								</a>
								<div className="border-b my-2"></div>
								<a
									className="text-sm font-bold text-zinc-600 py-2"
									href="/about"
								>
									En savoir plus
								</a>
								<div className="border-b my-2"></div>
								<a
									className="text-sm font-bold text-zinc-600 py-2"
									href="/contact"
								>
									Contact
								</a>
							</div>
						</div>
					</div>
				</div>
				<nav className="navbar">
					<div className="nav-background">
						<ul className="hidden nav-list ">
							<li className="menu w-full" onClick={toggleModal}>
								<div className="flex w-full justify-center ">
									<div>Menu</div>
									<div className="ml-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 16"
											fill="currentColor"
											class="w-4 h-4"
										>
											<path
												fill-rule="evenodd"
												d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
								</div>
							</li>
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Accueil</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projets</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">En savoir plus</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
