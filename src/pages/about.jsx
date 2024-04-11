import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import { Skills } from "../components/skill/Skills";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`En savoir plus | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									DJENANE YASSINE
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<div className="homepage-articles mt-6">
									<h2
										className="project-title"
										style={{ "padding-top": "0px" }}
									>
										Languages
									</h2>
									<Skills name="PHP" />
									<Skills name="Symfony" />
									<Skills name="Javascript" />
									<Skills name="React.js" />
									<Skills name="SQL" />
									<Skills name="GIT" />
									<Skills name="Tailwind" />
									<h2 className="mb-4 mt-4 project-title">
										Outils
									</h2>
									<Skills name="GitLab" />
									<Skills name="Jira" />
									<Skills name="Adobe Xd" />
									<Skills name="MySql" />
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
