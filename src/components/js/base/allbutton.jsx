import React, { useRef, useState, useEffect } from "react";

const supabase = require("../../../utils/supabase");
import { TimelineMax } from "gsap";
import { TweenMax } from "gsap";

import { suninfo } from "../extra/suninfo";
import { mercuryinfo } from "../extra/mercuryinfo";
import { venusinfo } from "../extra/venusinfo";
import { earthinfo } from "../extra/earthinfo";
import { marsinfo } from "../extra/marsinfo";
import { jupiterinfo } from "../extra/jupiterinfo";
import { saturninfo } from "../extra/saturninfo";
import { uranusinfo } from "../extra/uranusinfo";
import { neptuneinfo } from "../extra/neptuneinfo";

function AllButton(props) {
	// let { buttonEachPlanet } = props;
	// let btns = Object.keys(buttonEachPlanet).map(function (obj, index) {
	// 	return (
	// 		<div
	// 			className={buttonEachPlanet[obj].classesname}
	// 			key={index}
	// 			onClick={buttonEachPlanet[obj].method}
	// 		>
	// 			<div className="btntexteachplanet">
	// 				{buttonEachPlanet[obj].textname}
	// 			</div>
	// 		</div>
	// 	);
	// });
	// return (
	// 	<div className="cont-for-all-btn-main">
	// 		<div className="cont-for-all-btn">{btns}</div>
	// 	</div>
	// );

	return (
		<div className="cont-for-all-btn-main">
			<div className="cont-for-all-btn">
				<div className="btnsun">
					<div
						className="btntexteachplanet"
						value="SUN"
						onClick={suninfo}
					>
						SUN
					</div>
				</div>
				<div className="btnmercury">
					<div
						className="btntexteachplanet"
						value="MERCURY"
						onClick={mercuryinfo}
					>
						MERCURY
					</div>
				</div>
				<div className="btnvenus">
					<div
						className="btntexteachplanet"
						value="VENUS"
						onClick={venusinfo}
					>
						VENUS
					</div>
				</div>
				<div className="btnearth">
					<div
						className="btntexteachplanet"
						value="EARTH"
						onClick={earthinfo}
					>
						EARTH
					</div>
				</div>
				<div className="btnmars">
					<div
						className="btntexteachplanet"
						value="MARS"
						onClick={marsinfo}
					>
						MARS
					</div>
				</div>
				<div className="btnjupiter">
					<div
						className="btntexteachplanet"
						value="JUPITER"
						onClick={jupiterinfo}
					>
						JUPITER
					</div>
				</div>
				<div className="btnsaturn">
					<div
						className="btntexteachplanet"
						value="SATURN"
						onClick={saturninfo}
					>
						SATURN
					</div>
				</div>
				<div className="btnuranus">
					<div
						className="btntexteachplanet"
						value="URANUS"
						onClick={uranusinfo}
					>
						URANUS
					</div>
				</div>
				<div className="btneptune">
					<div
						className="btntexteachplanet"
						value="NEPTUNE"
						onClick={neptuneinfo}
					>
						NEPTUNE
					</div>
				</div>
			</div>
		</div>
	);
}

module.exports = AllButton;
