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
        element.style.color = "yellow";
        element.style.opacity = "1";
    }
    function unhigHlightItems(element){
        element.style.color = "gray";
        element.style.opacity = "0.5";
    }
    resetRater();
    setMouseHover();
    setMouseLeave();
    setClick();
    
}