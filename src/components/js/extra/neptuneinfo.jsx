import { gsap } from "gsap";
import { TimelineMax } from "gsap";
import { TweenMax } from "gsap";

function neptuneinfo() {
	let clickSun = new TimelineMax();

	clickSun.to(
		"#Neptune",
		1,
		{
			left: "15%",
			width: "20rem",
			height: "20rem",
			marginTop: "-10rem",
			marginLeft: "-10rem",
		},
		0
	);
	clickSun.to("#Neptune .pos", 1, { width: "20rem", height: "20rem" }, 0);
	clickSun.to("#Sun", 0.3, { opacity: "0" }, 0);
	clickSun.to("#Venus", 0.3, { opacity: "0" }, 0);
	clickSun.to("#Earth", 0.3, { opacity: "0" }, 0);
	clickSun.to("#Mars", 0.3, { opacity: "0" }, 0);
	clickSun.to("#Jupiter", 0.3, { opacity: "0" }, 0);
	clickSun.to("#Saturn", 0.3, { opacity: "0" }, 0);
	clickSun.to("#Uranus", 0.3, { opacity: "0" }, 0);
	clickSun.to("#Mercury", 0.3, { opacity: "0" }, 0);

	clickSun.to("#Mercury", 0.3, { display: "none" }, 0.3);
	clickSun.to("#Venus", 0.3, { display: "none" }, 0.3);
	clickSun.to("#Earth", 0.3, { display: "none" }, 0.3);
	clickSun.to("#Mars", 0.3, { display: "none" }, 0.3);
	clickSun.to("#Jupiter", 0.3, { display: "none" }, 0.3);
	clickSun.to("#Saturn", 0.3, { display: "none" }, 0.3);
	clickSun.to("#Uranus", 0.3, { display: "none" }, 0.3);
	clickSun.to("#Sun", 0.3, { display: "none" }, 0.3);

	clickSun.to(".btnsgalaxycont", 0.3, { y: "-30%", opacity: "0" }, 0);
	clickSun.to(".btnsgalaxycont", 0.3, { y: "-30%", opacity: "0" }, 0);

	clickSun.to(".mcdap", 0, { zIndex: "4" }, 0.3);
	clickSun.to(".neptuneclass", 0, { display: "flex" }, 0.6);
	clickSun.fromTo(
		".neptuneclass",
		1,
		{ opacity: "0", x: "60%" },
		{ opacity: "1", x: "0%" },
		0.6
	);
}

export { neptuneinfo };
