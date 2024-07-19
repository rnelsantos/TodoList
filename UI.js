
// Light/Dark Mode Theme  (HTML Color Change theme)
function setTheme(theme, persist = false) {
    const on = theme;
    const off = theme === 'light' ? 'dark' : 'light'

    const htmlEl = document.documentElement;
    htmlEl.classList.add(on);
    htmlEl.classList.remove(off);

    if (persist) {
        localStorage.setItem('preferred-theme', theme);
    }
}

// Light/Dark Mode Theme (UI Switch change)
const toggle = document.getElementById('toggle-input');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

function updateUI(theme) {
    toggle.checked = theme === 'light';

    if (theme === 'dark') {
        lightIcon.classList.add('hide');
        darkIcon.classList.remove('hide');
    } else {
        darkIcon.classList.add('hide');
        lightIcon.classList.remove('hide');
    }
}

toggle.addEventListener('click', () => {
    const theme = toggle.checked ? 'light' : 'dark';
    setTheme(theme, true);
    updateUI(theme);
});




const osPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const preferredTheme = localStorage.getItem('preferred-theme') || osPreference;

setTheme(preferredTheme, false);
updateUI(preferredTheme);


//Nav auto hide in small screen.
//open/close thru menu button
const menu = document.querySelector(".navIcon");
const main = document.querySelector("main");
let menuStatus ="closed" ;

menu.addEventListener('click', () => {

if (menuStatus=== "closed") {
    main.classList.add("showPanel"); 
    menuStatus ="open" 
}
else{
    main.classList.remove("showPanel");
    menuStatus ="closed" 
}


});


//Show/Hide Add task form
const addTask = document.querySelector(".addTask");
const addTaskForm = document.querySelector(".addTask-form");
const addTaskcancel = document.querySelector(".Xcancel");


addTask.addEventListener("click", () => {

    
    console.log("hi")
    
if (selectedProjectID === null){
    alert("Select A Project"); return;
}

    addTask.classList.add("hide");
    addTaskForm.classList.remove("hide");

})

addTaskcancel.addEventListener("click", () => {
    addTaskForm.classList.add("hide");
    addTask.classList.remove("hide");

})


//Show/Hide Add Project form
const addProjectBTN = document.querySelector(".addProject");
const addProjectForm = document.querySelector(".addProjectForm");
const ProjectCancel = document.querySelector(".ProjectCancel");



addProjectBTN.addEventListener("click", () => {

    addProjectBTN.classList.add("hide");
    addProjectForm.classList.remove("hide");

})

ProjectCancel.addEventListener("click", () => {
    addProjectBTN.classList.remove("hide");
    addProjectForm.classList.add("hide");

})




function changeColor(value){ //change color for prior select on add task
    const prioInput = document.querySelector(".priority-input");
    if(value  === "") {prioInput.style.border = ""}
    if(value  === "low") {prioInput.style.border ="2px solid green"}
    if(value  === "mid") {prioInput.style.border ="2px solid orange"}
    if(value  === "high") {prioInput.style.border ="2px solid red"}
}























/*
<template id="task-template">
<div class="taskContainer">
    <input 
    id="task-1"
    type="checkbox">
    <label  for="task-1">
        <span class="custom-checkbox"></span>
        Pay Bills
    </label>
    
    <p class="taskDetails">primeWater , Meralco , FiberBlaze, Rent, Credit Card</p>
    <p class="date">Due Date: 02/26/2025</p>
</div>
</template>
*/