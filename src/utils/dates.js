export function Dates(){
  this.removeTime= (date) => {
    return new Date(date.getFullYear(),date.getMonth(),date.getDate());
  }
    this.daysInMonth = (month, year) => {
        return new Date(year, month+1, 0).getDate();
    }
  this.lastDayOfMonth = (month,year) => {
        return new Date(year,month+1,0).getDay();
    }
  this.lastDateOfLastMonth = (month,year) => {
        return new Date(year,month,0).getDate();
    }
  this.firstDayOfMonth = (month,year) => {
        return new Date(year,month,1).getDay();
    }
  this.isToday = (date) =>{
        const today = new Date();
        today.setHours(0,0,0,0);
        return date.getTime() === today.getTime();
    };
}