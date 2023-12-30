import "./assets/css/normalize.css";
import "./assets/css/theme.css";
import "./assets/css/styles.css";
import {render as renderRater} from "./rater/index.js";
import {render as renderCalendar} from "./calendar/index.js";
import {render as renderSwitch} from "./switch/index.js";
import {Demo} from "./demo/index.js";

renderRater();
renderCalendar();
renderSwitch();
Demo();



