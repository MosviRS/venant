import { setValue } from "../utils/build";
export function Rater(rater){
    const element = rater;
    const items = rater.querySelectorAll(".point");
    
    function setCurrentItem(e){
        const currentRating = e.target.getAttribute("data-value");
        fillRater(currentRating);
    }
    function setRating(e){
        const currentRating = e.target.getAttribute("data-value");
        element.setAttribute("data-rating",currentRating);
        setValue(element,currentRating);
    }
    function resetRater(){
        const currentRating = element.getAttribute("data-rating");
        fillRater(currentRating);
    }
    function fillRater(rating){
        items.forEach((item) => {
            item.getAttribute("data-value") <= rating ? highlighItems(item): unhigHlightItems(item);
        });
    }
    function setMouseHover(){
        items.forEach((item) => {
            item.addEventListener("mouseover",setCurrentItem);
        });
    }
    function setMouseLeave(){
        items.forEach((item) => {
            item.addEventListener("mouseleave",resetRater);
        });
    }
    function setClick(){
        items.forEach((item) => {
            item.addEventListener("click",setRating);
        });
    }
    function highlighItems(element){
        element.classList.remove("rater__point--inactive");
        element.classList.add("rater__point--active");
    }
    function unhigHlightItems(element){
        element.classList.remove("rater__point--active");
        element.classList.add("rater__point--inactive");
    }
    this.init = () =>{
        resetRater();
        setMouseHover();
        setMouseLeave();
        setClick();
    } 

}