const Planet = require("./planet");
const PlanetDesc = require("./planet_desc");

function Main() {
	let solarsystem = [
		{ identity: "Sun", planet: "sun", nameplanet: "SUN" },
		{ identity: "Mercury", planet: "mercury", nameplanet: "MERCURY" },
		{ identity: "Venus", planet: "venus", nameplanet: "VENUS" },
		{ identity: "Earth", planet: "earth", nameplanet: "EARTH" },
		{ identity: "Mars", planet: "mars", nameplanet: "MARS" },
		{ identity: "Jupiter", planet: "jupiter", nameplanet: "JUPITER" },
		{ identity: "Saturn", planet: "saturn", nameplanet: "SATURN" },
		{ identity: "Uranus", planet: "uranus", nameplanet: "URANUS" },
		{ identity: "Neptune", planet: "neptune", nameplanet: "NEPTUNE" },
	];

	return (
		<div className="main-cont">
			{/*	<Planet identity={identity} planet={planet}></Planet>*/}
			<Planet solarsystem={solarsystem}></Planet>
			<div className="test">
				<PlanetDesc></PlanetDesc>
			</div>
		</div>
	);
}

module.exports = Main;
