//

//
import "gsap";
const NavSoc = require("./nav");
const Socdata = require("../extra/socdata");
const Navlogo = require("./navlogo");
const Main = require("./main");

function App() {
	return (
		<div className="main-cont-all">
			<div className="navbar-cont-pos">
				<div className="navbar-cont">
					<Navlogo></Navlogo>
					<Socdata></Socdata>
				</div>
			</div>
			<Main></Main>
		</div>
	);
}

module.exports = App;
