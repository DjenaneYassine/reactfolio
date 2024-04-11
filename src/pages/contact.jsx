import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Restons connectés, contactez-moi
						</div>

						<div className="subtitle contact-subtitle">
							Vos réactions, questions et suggestions sont les
							bienvenues. Si vous avez une question ou un
							commentaire spécifique, n'hésitez pas à m'envoyer un
							courriel directement à l'adresse &nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}.&nbsp;{" "}
							</a>
							Je m'efforce de répondre à tous les messages dans
							les 24 heures. Enfin, Si vous préférez me retrouver
							sur les réseaux sociaux, vous trouverez mes liens
							ci-dessous. Merci encore pour votre intérêt, et je
							vous attends avec impatience !
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
