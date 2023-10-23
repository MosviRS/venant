

import { setValue,getValue } from "../utils/build";
export function Switch(switcher){
    const element = switcher;
    const box = element.querySelector(".switch__box");
    const toogle = element.querySelector(".switch__button");

    function highligh(){
        box.classList.remove("switch__box--inactive");
        box.classList.add("switch__box--active");
        toogle.classList.remove("switch__button--inactive");
        toogle.classList.add("switch__button--active");
    }

    function unhigHlight(){
        box.classList.remove("switch__box--active");
        box.classList.add("switch__box--inactive");
        toogle.classList.remove("switch__button--active");
        toogle.classList.add("switch__button--inactive");
    }

    function changeStatus(){
        const status = getChecked();
        if(status === "true"){
            return disable();
        }
        return enable();
    }

    function setEventChangeStatus(){
        element.addEventListener("click",changeStatus);
    }

    function getChecked(){
        return element.getAttribute("checked");
    }

    function setChecked(status){
        element.setAttribute("checked",status);
    }
    
    function enable(){
        highligh();
        setValue(element,"on");
        setChecked(true);
    }

    function disable(){
        unhigHlight();
        setValue(element,"off");
        setChecked(false);
    }

    function reset(){
        disable();
    }
  
    this.init = () =>{
        reset();
        setEventChangeStatus();
    } 

}