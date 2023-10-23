import "./switch.css";
import {Switch} from "./switch.js";

export function render(){
    document.addEventListener("DOMContentLoaded", () => {
        const switchers = document.querySelectorAll("[role=switch]");
        switchers.forEach((switchers) => {
            new Switch(switchers).init();
        });
    });
}