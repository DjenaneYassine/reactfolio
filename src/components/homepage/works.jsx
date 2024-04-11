import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Expériences"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./logody.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Freelance Junior</div>
							<div className="work-subtitle">
								Développeur Web Symfony/React
							</div>
							<div className="work-duration">Mars - 2024</div>
						</div>

						<div className="work">
							<img
								src="./calasys.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Calasys</div>
							<div className="work-subtitle">
								Développeur Web
							</div>
							<div className="work-duration">2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
