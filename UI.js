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

console.log(menuStatus);
});



const addTask = document.querySelector(".addTask");
const addTaskForm = document.querySelector(".addTask-form");
const addTaskcancel = document.querySelector(".Xcancel");


addTask.addEventListener("click", () => {
    addTask.classList.add("hide");
    addTaskForm.classList.remove("hide");

})

addTaskcancel.addEventListener("click", () => {
    addTaskForm.classList.add("hide");
    addTask.classList.remove("hide");

})


const addProjectBTN = document.querySelector(".addProject");
const addProjectForm = document.querySelector(".addProjectForm");



addProjectBTN.addEventListener("click", () => {
    addProjectBTN.classList.add("hide");
    addProjectForm.classList.remove("hide");

})

addTaskcancel.addEventListener("click", () => {
    addTaskForm.classList.add("hide");
    addTask.classList.remove("hide");

})