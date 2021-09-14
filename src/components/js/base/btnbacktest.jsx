import { TimelineMax } from "gsap";
import { TweenMax } from "gsap";
const { gsap } = require("gsap/dist/gsap");

function BtnBack(props) {
	// //let { btnbackeachplanet } = props;
	// // let btnbacks = Object.keys(btnbackeachplanet).map(function (obj, index) {
	// // 	return (
	// // 		<div
	// // 			className={btnbackeachplanet[obj].classesname}
	// // 			key={index}
	// // 			onClick={btnbackeachplanet[obj].method}
	// // 		>
	// // 			<span className="backtitletext">BACK</span>
	// // 			<i className="fas fa-chevron-left"></i>
	// // 		</div>
	// // 	);
	// // });
	// // const first = Object.values(btnbackeachplanet)[0];
	// // console.log(first);
	// // let btnbacks = Object.keys(btnbackeachplanet).map(function (obj, index) {
	// // 	return (
	// // 		<div
	// // 			className={btnbackeachplanet[obj].classesname}
	// // 			key={index}
	// // 			// onClick={btnbackeachplanet[obj].method}
	// // 			{...btnbackeachplanet[obj].method}
	// // 		>
	// // 			<span className="backtitletext">BACK</span>
	// // 			<i className="fas fa-chevron-left"></i>
	// // 		</div>
	// // 	);
	// // });
	// // return <div className="backback-cont">{btnbacks}</div>;
	// function lol {
	// 	console.log("hi")
	// }
	function clickBackInfo() {
		let sun = document.querySelector("#sunback");
		let mercury = document.querySelector("#mercuryback");
		let venus = document.querySelector("#venusback");
		let earth = document.querySelector("#earthback");
		let mars = document.querySelector("#marsback");
		let jupiter = document.querySelector("#jupiterback");
		let saturn = document.querySelector("#saturnback");
		let uranus = document.querySelector("#uranusback");
		let neptune = document.querySelector("#neptuneback");

		// sun
		function sunbackback() {
			let tl = new TimelineMax();

			tl.fromTo(
				".sunclass",
				0.3,
				{ x: "0%", opacity: "1" },
				{ x: "60%", opacity: "0" },
				0
			);
			tl.to(".sunclass", 0, { display: "none" }, 0.3);
			tl.to(".mcdap", 0, { zIndex: "2" }, 0.3);

			tl.to(".btnsgalaxycont", 0.3, { y: "0%", opacity: "1" }, 0.3);
			tl.to(
				"#Sun ",
				1,
				{
					left: "0%",
					width: "30rem",
					height: "30rem",
					marginTop: "-15rem",
					marginLeft: "-15rem",
				},
				0
			);
			tl.to("#Sun .pos", 1, { width: "30rem", height: "30rem" }, 0);

			tl.to("#Mercury", 0.3, { display: "block" }, 0.3);
			tl.to("#Venus", 0.3, { display: "block" }, 0.3);
			tl.to("#Earth", 0.3, { display: "block" }, 0.3);
			tl.to("#Mars", 0.3, { display: "block" }, 0.3);
			tl.to("#Jupiter", 0.3, { display: "block" }, 0.3);
			tl.to("#Saturn", 0.3, { display: "block" }, 0.3);
			tl.to("#Uranus", 0.3, { display: "block" }, 0.3);
			tl.to("#Neptune", 0.3, { display: "block" }, 0.3);

			tl.to("#Mercury", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Venus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Earth", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Mars", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Jupiter", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Saturn", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Uranus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Neptune", 0.3, { opacity: "1" }, 0.6);
		}

		// mercury
		function mercurybackback() {
			let tl = new TimelineMax();

			tl.fromTo(
				".mercuryclass",
				0.3,
				{ x: "0%", opacity: "1" },
				{ x: "60%", opacity: "0" },
				0
			);
			tl.to(".mercuryclass", 0, { display: "none" }, 0.3);
			tl.to(".mcdap", 0, { zIndex: "2" }, 0.3);

			tl.to(".btnsgalaxycont", 0.3, { y: "0%", opacity: "1" }, 0.3);
			tl.to(
				"#Mercury ",
				1,
				{
					left: "17%",
					width: "4rem",
					height: "4rem",
					marginTop: "-2rem",
					marginLeft: "-2rem",
				},
				0
			);
			tl.to("#Mercury .pos", 1, { width: "4rem", height: "4rem" }, 0);

			tl.to("#Sun", 0.3, { display: "block" }, 0.3);
			tl.to("#Venus", 0.3, { display: "block" }, 0.3);
			tl.to("#Earth", 0.3, { display: "block" }, 0.3);
			tl.to("#Mars", 0.3, { display: "block" }, 0.3);
			tl.to("#Jupiter", 0.3, { display: "block" }, 0.3);
			tl.to("#Saturn", 0.3, { display: "block" }, 0.3);
			tl.to("#Uranus", 0.3, { display: "block" }, 0.3);
			tl.to("#Neptune", 0.3, { display: "block" }, 0.3);

			tl.to("#Sun", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Venus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Earth", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Mars", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Jupiter", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Saturn", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Uranus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Neptune", 0.3, { opacity: "1" }, 0.6);
		}

		// venus
		function venusbackback() {
			let tl = new TimelineMax();

			tl.fromTo(
				".venusclass",
				0.3,
				{ x: "0%", opacity: "1" },
				{ x: "60%", opacity: "0" },
				0
			);
			tl.to(".venusclass", 0, { display: "none" }, 0.3);
			tl.to(".mcdap", 0, { zIndex: "2" }, 0.3);

			tl.to(".btnsgalaxycont", 0.3, { y: "0%", opacity: "1" }, 0.3);
			tl.to(
				"#Venus ",
				1,
				{
					left: "24%",
					width: "6rem",
					height: "6rem",
					marginTop: "-3rem",
					marginLeft: "-3rem",
				},
				0
			);
			tl.to("#Venus .pos", 1, { width: "6rem", height: "6rem" }, 0);

			tl.to("#Mercury", 0.3, { display: "block" }, 0.3);
			tl.to("#Sun", 0.3, { display: "block" }, 0.3);
			tl.to("#Earth", 0.3, { display: "block" }, 0.3);
			tl.to("#Mars", 0.3, { display: "block" }, 0.3);
			tl.to("#Jupiter", 0.3, { display: "block" }, 0.3);
			tl.to("#Saturn", 0.3, { display: "block" }, 0.3);
			tl.to("#Uranus", 0.3, { display: "block" }, 0.3);
			tl.to("#Neptune", 0.3, { display: "block" }, 0.3);

			tl.to("#Mercury", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Sun", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Earth", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Mars", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Jupiter", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Saturn", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Uranus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Neptune", 0.3, { opacity: "1" }, 0.6);
		}

		// earth
		function earthbackback() {
			let tl = new TimelineMax();

			tl.fromTo(
				".earthclass",
				0.3,
				{ x: "0%", opacity: "1" },
				{ x: "60%", opacity: "0" },
				0
			);
			tl.to(".earthclass", 0, { display: "none" }, 0.3);
			tl.to(".mcdap", 0, { zIndex: "2" }, 0.3);

			tl.to(".btnsgalaxycont", 0.3, { y: "0%", opacity: "1" }, 0.3);
			tl.to(
				"#Earth ",
				1,
				{
					left: "32%",
					width: "6rem",
					height: "6rem",
					marginTop: "-3rem",
					marginLeft: "-3rem",
				},
				0
			);
			tl.to("#Earth .pos", 1, { width: "6rem", height: "6rem" }, 0);

			tl.to("#Mercury", 0.3, { display: "block" }, 0.3);
			tl.to("#Venus", 0.3, { display: "block" }, 0.3);
			tl.to("#Sun", 0.3, { display: "block" }, 0.3);
			tl.to("#Mars", 0.3, { display: "block" }, 0.3);
			tl.to("#Jupiter", 0.3, { display: "block" }, 0.3);
			tl.to("#Saturn", 0.3, { display: "block" }, 0.3);
			tl.to("#Uranus", 0.3, { display: "block" }, 0.3);
			tl.to("#Neptune", 0.3, { display: "block" }, 0.3);

			tl.to("#Mercury", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Venus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Sun", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Mars", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Jupiter", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Saturn", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Uranus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Neptune", 0.3, { opacity: "1" }, 0.6);
		}

		// mars
		function marsbackback() {
			let tl = new TimelineMax();

			tl.fromTo(
				".marsclass",
				0.3,
				{ x: "0%", opacity: "1" },
				{ x: "60%", opacity: "0" },
				0
			);
			tl.to(".marsclass", 0, { display: "none" }, 0.3);
			tl.to(".mcdap", 0, { zIndex: "2" }, 0.3);

			tl.to(".btnsgalaxycont", 0.3, { y: "0%", opacity: "1" }, 0.3);
			tl.to(
				"#Mars ",
				1,
				{
					left: "40%",
					width: "5rem",
					height: "5rem",
					marginTop: "-2.5rem",
					marginLeft: "-2.5rem",
				},
				0
			);
			tl.to("#Mars .pos", 1, { width: "5rem", height: "5rem" }, 0);

			tl.to("#Mercury", 0.3, { display: "block" }, 0.3);
			tl.to("#Venus", 0.3, { display: "block" }, 0.3);
			tl.to("#Earth", 0.3, { display: "block" }, 0.3);
			tl.to("#Sun", 0.3, { display: "block" }, 0.3);
			tl.to("#Jupiter", 0.3, { display: "block" }, 0.3);
			tl.to("#Saturn", 0.3, { display: "block" }, 0.3);
			tl.to("#Uranus", 0.3, { display: "block" }, 0.3);
			tl.to("#Neptune", 0.3, { display: "block" }, 0.3);

			tl.to("#Mercury", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Venus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Earth", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Sun", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Jupiter", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Saturn", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Uranus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Neptune", 0.3, { opacity: "1" }, 0.6);
		}

		//jupiter
		function jupiterbackback() {
			let tl = new TimelineMax();

			tl.fromTo(
				".jupiterclass",
				0.3,
				{ x: "0%", opacity: "1" },
				{ x: "60%", opacity: "0" },
				0
			);
			tl.to(".jupiterclass", 0, { display: "none" }, 0.3);
			tl.to(".mcdap", 0, { zIndex: "2" }, 0.3);

			tl.to(".btnsgalaxycont", 0.3, { y: "0%", opacity: "1" }, 0.3);
			tl.to(
				"#Jupiter ",
				1,
				{
					left: "53%",
					width: "15rem",
					height: "15rem",
					marginTop: "-7.5rem",
					marginLeft: "-7.5rem",
				},
				0
			);
			tl.to("#Jupiter .pos", 1, { width: "15rem", height: "15rem" }, 0);

			tl.to("#Mercury", 0.3, { display: "block" }, 0.3);
			tl.to("#Venus", 0.3, { display: "block" }, 0.3);
			tl.to("#Earth", 0.3, { display: "block" }, 0.3);
			tl.to("#Mars", 0.3, { display: "block" }, 0.3);
			tl.to("#Sun", 0.3, { display: "block" }, 0.3);
			tl.to("#Saturn", 0.3, { display: "block" }, 0.3);
			tl.to("#Uranus", 0.3, { display: "block" }, 0.3);
			tl.to("#Neptune", 0.3, { display: "block" }, 0.3);

			tl.to("#Mercury", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Venus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Earth", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Mars", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Sun", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Saturn", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Uranus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Neptune", 0.3, { opacity: "1" }, 0.6);
		}

		// saturn
		function saturnbackback() {
			let tl = new TimelineMax();

			tl.fromTo(
				".saturnclass",
				0.3,
				{ x: "0%", opacity: "1" },
				{ x: "60%", opacity: "0" },
				0
			);
			tl.to(".saturnclass", 0, { display: "none" }, 0.3);
			tl.to(".mcdap", 0, { zIndex: "2" }, 0.3);

			tl.to(".btnsgalaxycont", 0.3, { y: "0%", opacity: "1" }, 0.3);
			tl.to(
				"#Saturn ",
				1,
				{
					left: "73%",
					width: "12rem",
					height: "12rem",
					marginTop: "-6rem",
					marginLeft: "-6rem",
				},
				0
			);
			tl.to("#Saturn .pos", 1, { width: "12rem", height: "12rem" }, 0);

			tl.to("#Mercury", 0.3, { display: "block" }, 0.3);
			tl.to("#Venus", 0.3, { display: "block" }, 0.3);
			tl.to("#Earth", 0.3, { display: "block" }, 0.3);
			tl.to("#Mars", 0.3, { display: "block" }, 0.3);
			tl.to("#Jupiter", 0.3, { display: "block" }, 0.3);
			tl.to("#Sun", 0.3, { display: "block" }, 0.3);
			tl.to("#Uranus", 0.3, { display: "block" }, 0.3);
			tl.to("#Neptune", 0.3, { display: "block" }, 0.3);

			tl.to("#Mercury", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Venus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Earth", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Mars", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Jupiter", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Sun", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Uranus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Neptune", 0.3, { opacity: "1" }, 0.6);
		}

		// uranus
		function uranusbackback() {
			let tl = new TimelineMax();

			tl.fromTo(
				".uranusclass",
				0.3,
				{ x: "0%", opacity: "1" },
				{ x: "60%", opacity: "0" },
				0
			);
			tl.to(".uranusclass", 0, { display: "none" }, 0.3);
			tl.to(".mcdap", 0, { zIndex: "2" }, 0.3);

			tl.to(".btnsgalaxycont", 0.3, { y: "0%", opacity: "1" }, 0.3);
			tl.to(
				"#Uranus ",
				1,
				{
					left: "86%",
					width: "8rem",
					height: "8rem",
					marginTop: "-4rem",
					marginLeft: "-4rem",
				},
				0
			);
			tl.to("#Uranus .pos", 1, { width: "8rem", height: "8rem" }, 0);

			tl.to("#Mercury", 0.3, { display: "block" }, 0.3);
			tl.to("#Venus", 0.3, { display: "block" }, 0.3);
			tl.to("#Earth", 0.3, { display: "block" }, 0.3);
			tl.to("#Mars", 0.3, { display: "block" }, 0.3);
			tl.to("#Jupiter", 0.3, { display: "block" }, 0.3);
			tl.to("#Saturn", 0.3, { display: "block" }, 0.3);
			tl.to("#Sun", 0.3, { display: "block" }, 0.3);
			tl.to("#Neptune", 0.3, { display: "block" }, 0.3);

			tl.to("#Mercury", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Venus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Earth", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Mars", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Jupiter", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Saturn", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Sun", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Neptune", 0.3, { opacity: "1" }, 0.6);
		}

		// neptune
		function neptunebackback() {
			let tl = new TimelineMax();

			tl.fromTo(
				".neptuneclass",
				0.3,
				{ x: "0%", opacity: "1" },
				{ x: "60%", opacity: "0" },
				0
			);
			tl.to(".neptuneclass", 0, { display: "none" }, 0.3);
			tl.to(".mcdap", 0, { zIndex: "2" }, 0.3);

			tl.to(".btnsgalaxycont", 0.3, { y: "0%", opacity: "1" }, 0.3);
			tl.to(
				"#Neptune ",
				1,
				{
					left: "96%",
					width: "8rem",
					height: "8rem",
					marginTop: "-4rem",
					marginLeft: "-4rem",
				},
				0
			);
			tl.to("#Neptune .pos", 1, { width: "8rem", height: "8rem" }, 0);

			tl.to("#Mercury", 0.3, { display: "block" }, 0.3);
			tl.to("#Venus", 0.3, { display: "block" }, 0.3);
			tl.to("#Earth", 0.3, { display: "block" }, 0.3);
			tl.to("#Mars", 0.3, { display: "block" }, 0.3);
			tl.to("#Jupiter", 0.3, { display: "block" }, 0.3);
			tl.to("#Saturn", 0.3, { display: "block" }, 0.3);
			tl.to("#Uranus", 0.3, { display: "block" }, 0.3);
			tl.to("#Sun", 0.3, { display: "block" }, 0.3);

			tl.to("#Mercury", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Venus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Earth", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Mars", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Jupiter", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Saturn", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Uranus", 0.3, { opacity: "1" }, 0.6);
			tl.to("#Sun", 0.3, { opacity: "1" }, 0.6);
		}

		//  event

		sun.addEventListener("click", sunbackback);
		mercury.addEventListener("click", mercurybackback);
		venus.addEventListener("click", venusbackback);
		earth.addEventListener("click", earthbackback);
		mars.addEventListener("click", marsbackback);
		jupiter.addEventListener("click", jupiterbackback);
		saturn.addEventListener("click", saturnbackback);
		uranus.addEventListener("click", uranusbackback);
		neptune.addEventListener("click", neptunebackback);
	}

	return (
		<div className="btnbackback" onClick={clickBackInfo}>
			<span className="backtitletext">BACK</span>
			<i className="fas fa-chevron-left"></i>
		</div>
	);
}

module.exports = BtnBack;
