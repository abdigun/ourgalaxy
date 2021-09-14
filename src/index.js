//

const React = require("react");
const { render } = require("react-dom");
const { gsap } = require("gsap/dist/gsap");

const App = require("./components/js/base/app");

let main = document.querySelector("#app");

render(<App />, main);
