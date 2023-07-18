import "./calendar.css";
import {Calendar} from "./calendar";

export function render(){
    document.addEventListener("DOMContentLoaded", () => {
        const calendar = document.querySelectorAll("[role=calendar]");
        calendar.forEach((element) => {
            new Calendar(element).init();
        });
    });
}