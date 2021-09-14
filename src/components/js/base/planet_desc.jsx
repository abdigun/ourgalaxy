const { useState, useEffect, useRef } = require("react");

const supabase = require("../../../utils/supabase");

const React = require("react");
const { render } = require("react-dom");
const BtnBack = require("./btnbacktest");
import { TimelineMax } from "gsap";
import { TweenMax } from "gsap";
const { gsap } = require("gsap/dist/gsap");

function PlanetDesc() {
	const [planetdescript, setplanet] = useState([]);
	let componentsback = null;
	const elemRef = useRef(null);

	// const onbuttonclick = () => {
	// 	let ass = new TimelineMax()
	// 	ass.to(".sunclass", 1,{width:"0%"})
	// }

	// // let btnbackeachplanet = [
	// 	// {
	// 	// 	classesname: "btnbacksun",
	// 	// 	method() {
	// 	// 		console.log("this true 1");
	// 	// 	},
	// 	// },
	// 	// {
	// 	// 	classesname: "btnbackmercury",
	// 	// 	method() {
	// 	// 		console.log("this true 2 ");
	// 	// 	},
	// 	// },
	// 	// {
	// 	// 	classesname: "btnbackvenus",
	// 	// 	method() {
	// 	// 		console.log("this true 3");
	// 	// 	},
	// 	// },
	// 	// {
	// 	// 	classesname: "btnbackearth",
	// 	// 	method() {
	// 	// 		console.log("this true 4");
	// 	// 	},
	// 	// },
	// 	// {
	// 	// 	classesname: "btnbackmars",
	// 	// 	method() {
	// 	// 		console.log("this true 5");
	// 	// 	},
	// 	// },
	// 	// {
	// 	// 	classesname: "btnbackjupiter",
	// 	// 	method() {
	// 	// 		console.log("this true 6");
	// 	// 	},
	// 	// },
	// 	// {
	// 	// 	classesname: "btnbacksaturn",
	// 	// 	method() {
	// 	// 		console.log("this true 7");
	// 	// 	},
	// 	// },
	// 	// {
	// 	// 	classesname: "btnbackuranus",
	// 	// 	method() {
	// 	// 		console.log("this true 8");
	// 	// 	},
	// 	// },
	// 	// {
	// 	// 	classesname: "btnbackneptune",
	// 	// 	method() {
	// 	// 		console.log("this true 9");
	// 	// 	},
	// 	// },
	// 	//{
	// 	//	classesname: "testback",
	// 	//	method() {
	// 	//		let suntestpower = document.querySelector(
	// 	//			"#sunback .backback-cont"
	// 	//		);
	// 	//		function a() {
	// 	//			console.log("hi");
	// 	//		}

	// 	//		suntestpower.addEventListener("click", a);
	// 	//	},
	// 	//},
	// //];

	let testing = Object(planetdescript).map(function (planet, index) {
		return (
			<div key={index} className={planet.classesdesc} ref={elemRef}>
				<div className="cont-backbutton">
					<div id={planet.backclass} className="backbutton">
						{/*<span className="backtitletext">BACK</span>
						<i className="fas fa-chevron-left"></i>*/}
						<BtnBack
						// btnbackeachplanet={btnbackeachplanet}
						></BtnBack>
					</div>
				</div>
				<div className="cont-desc-all-desc">
					<div className="cont-desc-title-desc">
						<h2 className="number-planet">{planet.idnumber}</h2>
						<h3 className="desc-title-planet-desc">
							{planet.planetname}
						</h3>
					</div>
					<div className="desc-forplanet-each-cont">
						<div className="desc-forplanet">
							<p className="descplanet">
								{planet.planetdescription}
							</p>
							<p className="descplanet">
								{planet.planetdescriptiontwo}
							</p>
							<p className="descplanet">
								{planet.planetdescriptionthree}
							</p>
							<p className="descplanet">
								{planet.planetdescriptionfour}
							</p>
						</div>
					</div>
					<div className="desc-misc-info-planet-cont">
						<div className="planetday-cont">
							<p className="planetdaytext-title">PLANET DAY :</p>
							<p className="planetdaytext-text">
								{planet.planetday} HOURS
							</p>
						</div>
						<div className="planetyear-cont">
							<p className="planetyeartext-title">
								PLANET YEAR :
							</p>
							<p className="planetyeartext-text">
								{planet.planetyear} DAYS
							</p>
						</div>
						<div className="planettilt-cont">
							<p className="planettilttext-title">TILT :</p>
							<p className="planettilttext-text">
								{planet.planettilt} °
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	});
	useEffect(function () {
		supabase
			.from("planet")
			.select("*")
			.order("id", { ascending: true })
			//.eq("planetname", "SUN")
			.then(function (data) {
				//console.log(data);
				setplanet(data.body);
			});
	}, []);
	return <div className="main-cont-decs-all-planet mcdap">{testing}</div>;
}

module.exports = PlanetDesc;

// class MyComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			error: null,
// 			isLoaded: false,
// 			items: [],
// 		};
// 	}

// 	componentDidMount() {
// 		fetch("https://ouwdxqugpqmfrwwxmgnb.supabase.co/rest/v1/planet?select=*&planetname=eq.SUN")
// 			.then((res) => res.json())
// 			.then(
// 				(result) => {
// 					this.setState({
// 						isLoaded: true,
// 						items: result.items,
// 					});
// 				},
// 				// Note: it's important to handle errors here
// 				// instead of a catch() block so that we don't swallow
// 				// exceptions from actual bugs in components.
// 				(error) => {
// 					this.setState({
// 						isLoaded: true,
// 						error,
// 					});
// 				}
// 			);
// 	}

// 	render() {
// 		const { error, isLoaded, items } = this.state;
// 		if (error) {
// 			return <div>Error: {error.message}</div>;
// 		} else if (!isLoaded) {
// 			return <div>Loading...</div>;
// 		} else {
// 			return (
// 				<ul>
// 					{items.map((planet) => (
// 						<li key={planet.classesdesc}>
// 							{planet.planetyear} {planet.planettilt}
// 						</li>
// 					))}
// 				</ul>
// 			);
// 		}
// 	}
// }

// module.exports = MyComponent;
