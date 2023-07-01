import "./rater.css";
import {Rater} from "./rater.js";

export function render(){
    document.addEventListener("DOMContentLoaded", () => {
        const raters = document.querySelectorAll("[role=rater]");
        raters.forEach((rater) => {
            new Rater(rater);
        });
    });
}