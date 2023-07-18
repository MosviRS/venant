export function Calendar(calendar){
    let currentDate = new Date(); 
    const element = calendar;
    const labelMonth = element.querySelector(".current-month");
    const daysBoard = document.querySelector(".days");
    const prevMonthBtn = document.getElementById("prev-month");
    const nextMonthBtn = document.getElementById("next-month");
    const active = "active";
    const inactive = "inactive";
    const normal = "normal";
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    function daysInMonth(month, year) {
        return new Date(year, month+1, 0).getDate();
    }
    function lastDayOfMonth(month,year){
        return new Date(year,month+1,0).getDay();
    }
    function lastDateOfLastMonth(month,year){
        return new Date(year,month,0).getDate();
    }
    function firstDayOfMonth(month,year){
        return new Date(year,month,1).getDay();
    }
    function isToday(date){
        const today = new Date();
        today.setHours(0,0,0,0);
        return date.getTime() === today.getTime();
    };
    function printCurrentMonth(start,end){
        for (let i = start; i < end; i++) {
            const indexToDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),i);
            const day = document.createElement("li");
            day.innerHTML = i;
            day.classList.add(normal);
            if (isToday(indexToDate)) day.classList.add(active);
            daysBoard.appendChild(day);
        }
    }
      
    function printInactiveMonths(start,end){
        for (let i = start; i < end; i++) {
            const day = document.createElement("li");
            day.innerHTML = i;
            day.classList.add(inactive);
            daysBoard.appendChild(day);
        }
    }
    function setMonthLabel(month){
        labelMonth.innerHTML = months[month];
    }
    function loadDaysOfMonth(){
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        printInactiveMonths(lastDateOfLastMonth(month,year) - (firstDayOfMonth(month,year) - 1),
                            lastDateOfLastMonth(month,year) + 1,inactive);
        printCurrentMonth(1,daysInMonth(month,year) + 1,normal);
        printInactiveMonths(1,(6 - lastDayOfMonth(month,year)) +1 ,inactive);
    }
    function setMonthsButton(element,callback){
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
        setMonthsButton(prevMonthBtn,eventPrevMonth);
        setMonthsButton(nextMonthBtn,eventNextMonth);
    }     
}