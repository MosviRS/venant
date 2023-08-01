import {Dates} from "../utils/dates";
import {setValue} from "../utils/build";
export function Calendar(calendar){
    let currentDate = new Date(); 
    const dates = new Dates();
    const element = calendar;
    const labelMonth = element.querySelector(".current-month");
    const daysBoard = document.querySelector(".days");
    const prevMonthBtn = document.getElementById("prev-month");
    const nextMonthBtn = document.getElementById("next-month");
    const active = "active";
    const inactive = "inactive";
    const normal = "normal";
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    function printCurrentMonth(start,end){
        for (let i = start; i < end; i++) {
            const indexToDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),i);
            const day = document.createElement("li");
            day.innerHTML = i;
            day.classList.add(normal);
            if (dates.isToday(indexToDate)) day.classList.add(active);
            daysBoard.appendChild(day);
            setEvents(day,eventSelectDay);
        }
    }      
    function printInactiveAfterMonths(start,end){
        for (let i = start; i < end; i++) {
            const day = document.createElement("li");
            day.innerHTML = i;
            day.classList.add(inactive);
            daysBoard.appendChild(day);
            setEvents(day,eventNextMonth);
        }
    }         
    function printInactivePrevMonths(start,end){
        for (let i = start; i < end; i++) {
            const day = document.createElement("li");
            day.innerHTML = i;
            day.classList.add(inactive);
            daysBoard.appendChild(day);
            setEvents(day,eventPrevMonth);
        }
    }
    function setMonthLabel(month){
        labelMonth.innerHTML = months[month];
    }
    function loadDaysOfMonth(){
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        printInactivePrevMonths(dates.lastDateOfLastMonth(month,year) - (dates.firstDayOfMonth(month,year) - 1),
                            dates.lastDateOfLastMonth(month,year) + 1,inactive);
        printCurrentMonth(1,dates.daysInMonth(month,year) + 1,normal);
        printInactiveAfterMonths(1,(6 - dates.lastDayOfMonth(month,year)) +1 ,inactive);
    }
    function setEvents(element,callback){
        element.addEventListener("click",callback);
    }
    function eventPrevMonth(){
        currentDate = new Date(currentDate.getFullYear(),currentDate.getMonth() - 1);
        buildBoard();
    }
    function eventNextMonth(){
        currentDate = new Date(currentDate.getFullYear(),currentDate.getMonth() + 1);
        buildBoard();
    }
    function getSelectedDate(day){
        return new Date(currentDate.getFullYear(),currentDate.getMonth(),day); 
    }
    function eventSelectDay(e){
        const days = document.querySelectorAll(".days li");
        days.forEach(day => {
            day.classList.remove(active);
        });
        e.target.classList.add(active);
        const day = e.target.innerHTML;
        const selectedDate = getSelectedDate(day);
        setValue(element,selectedDate);
    }

    function cleanBoard(){
        daysBoard.innerHTML = "";
    }
    function buildBoard(){
        cleanBoard();
        setMonthLabel(currentDate.getMonth());
        loadDaysOfMonth();
    };
    this.init = () => { 
        buildBoard();
        setEvents(prevMonthBtn,eventPrevMonth);
        setEvents(nextMonthBtn,eventNextMonth);
    }     
}