const AllButton = require("./allbutton");
const PlanetDesc = require("./planet_desc");

function Planet(props) {
	// let { identity, planet } = props;
	// console.log(props);
	// let eachid = identity.map(function (id) {
		// 	return (
		// 		<div id={id} className={planet}>
		// 			<div className="pos">
		// 				<div className="planet"></div>
		// 			</div>
		// 		</div>
		// 	);
	// });

	// let buttonEachPlanet = [
		// 	{
		// 		classesname: "btnsun",
		// 		textname: "SUN",
		// 		method() {
		// 			return <div></div>;
		// 		},
		// 	},
		// 	{
		// 		classesname: "btnmercury",
		// 		textname: "MERCURY",
		// 		method() {
		// 			console.log("this true");
		// 		},
		// 	},
		// 	{
		// 		classesname: "btnvenus",
		// 		textname: "VENUS",
		// 		method() {
		// 			console.log("this true");
		// 		},
		// 	},
		// 	{
		// 		classesname: "btnearth",
		// 		textname: "EARTH",
		// 		method() {
		// 			console.log("this true");
		// 		},
		// 	},
		// 	{
		// 		classesname: "btnmars",
		// 		textname: "MARS",
		// 		method() {
		// 			console.log("this true");
		// 		},
		// 	},
		// 	{
		// 		classesname: "btnjupiter",
		// 		textname: "JUPITER",
		// 		method() {
		// 			console.log("this true");
		// 		},
		// 	},
		// 	{
		// 		classesname: "btnsaturn",
		// 		textname: "SATURN",
		// 		method() {
		// 			console.log("this true");
		// 		},
		// 	},
		// 	{
		// 		classesname: "btnuranus",
		// 		textname: "URANUS",
		// 		method() {
		// 			console.log("this true");
		// 		},
		// 	},
		// 	{
		// 		classesname: "btnneptune",
		// 		textname: "NEPTUNE",
		// 		method() {
		// 			console.log("this true");
		// 		},
		// 	},
	// ];

	let { solarsystem } = props;

	let eachplanet = Object.keys(solarsystem).map(function (obj, index) {
		return (
			<div
				id={solarsystem[obj].identity}
				className={solarsystem[obj].planet}
				key={index}
			>
				<div className="pos">
					<div className="planet-surface">
						<div className="planet-shadow"></div>
						<div className="planet"></div>
					</div>
				</div>
				{/*				<div className="planet-cont-title">
					<div className="planet-title">
						{solarsystem[obj].nameplanet}
					</div>
				</div>*/}
			</div>
		);
	});

	return (
		<div className="galaxy size-galaxy pos-galaxy">
			<div className="allplanetgalaxy">{eachplanet}</div>
			<div className="btnsgalaxycont">
				{/*<AllButton buttonEachPlanet={buttonEachPlanet}></AllButton>*/}
				<AllButton></AllButton>
			</div>
			{/*{buttonEachPlanet.textname}*/}
		</div>
	);
}

module.exports = Planet;
