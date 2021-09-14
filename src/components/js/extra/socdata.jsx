import { gsap } from "gsap";
import ReactDOM from "react-dom";
const NavSoc = require("../base/nav");

function Socdata() {
	const fbsoc = {
		reef: "https://www.facebook.com/mohd.azahan/",
		classes: "fab fa-facebook-square",
	};
	const githubsoc = {
		reef: "https://github.com/abdigun",
		classes: "fab fa-github",
	};

	const codepensoc = {
		reef: "https://codepen.io/abdigun90",
		classes: "fab fa-codepen",
	};

	const linkedsoc = {
		reef: "https://www.linkedin.com/in/mohamad-azahan-a05167162/",
		classes: "fab fa-linkedin",
	};

	return (
		<div className="cont-main-soc">
			<NavSoc reef={fbsoc.reef} classes={fbsoc.classes}></NavSoc>
			<NavSoc reef={linkedsoc.reef} classes={linkedsoc.classes}></NavSoc>
			<NavSoc reef={githubsoc.reef} classes={githubsoc.classes}></NavSoc>
			<NavSoc
				reef={codepensoc.reef}
				classes={codepensoc.classes}
			></NavSoc>
		</div>
	);
}

module.exports = Socdata;
