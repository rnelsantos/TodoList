//import {addDays} from "date-fns";

//const date = new Date();
//const tom =addDays(date,1);
//console.log();




import ticklogoSVG from './assets/tickLogo.svg'
import navIconSVG from './assets/navIcon.svg'
import  './styles/main.css'

const tickLogo = document.querySelector('[tick-Logo]')
tickLogo.src =  ticklogoSVG
const navIcon = document.querySelector('[nav-Icon]')
navIcon.src =  navIconSVG



// save point for overall Project List
const LOCAL_STORAGE_LIST_key = "project.lists"
let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_key))||[];

// save point for current Selected local
const LOCAL_STORAGE_SELECTED_PROJECT_KEY_ID = "project.selected.list"
let selectedProjectID = null;
selectedProjectID = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY_ID));
console.log("index:"+selectedProjectID)

function saveLocal() {
    localStorage.setItem(LOCAL_STORAGE_LIST_key,JSON.stringify(projectList));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY_ID,JSON.stringify(selectedProjectID))   
}



//Project Constructor|| e.target.closest.firstChild.toLowerCase() === 'p'
function newProject (name) {
    const projectName = name;
    const ID = (Date.now()).toString();
    const taskArray = [];
    return {projectName, ID, taskArray}

}

//Task Constructor
function newTask (name, details, dueDate,priority) {
    const complete = false; 
    const TaskName = name;
    const ID = (Date.now()).toString();
    return {TaskName, details, dueDate, priority, ID, complete}
}



const createTask = (TaskName, details, dueDate, priority, ID) => {
    const task = newTask(TaskName, details, dueDate, priority, ID );

    const activeProject = projectList.find(project  => project.ID === selectedProjectID)
    activeProject.taskArray.push(task);

    saveLocal();render.projectListDisplay(projectListContainer);
    console.log(projectList)
    
    addTaskForm.classList.add("hide");
    addTask.classList.remove("hide");
    }


  






//for render DOM declerations
const taskTemplate = document.querySelector("#task-template");
const taskContainer = document.querySelector("[data-task-container]")


//RENDER AND DISPLAY IIFE module Pattern
const render =(function (){
    

    const  clearElements = (element) => {
        while (element.firstElementChild) {
            element.removeChild(element.firstElementChild);
        }
    }

    const projectListDisplay = () => {
        render.clearElements(projectListContainer)
        projectList.forEach(project =>{
        //generate Element for append   
        const listElement = document.createElement("li")
        listElement.dataset.listID = project.ID;
        listElement.classList.add("menuBar");
        const pElement = document.createElement("p")
        pElement.innerText =project.projectName;
        listElement.appendChild(pElement);
      
        
        if(project.ID==selectedProjectID) {
            listElement.classList.add("active-project");
            const editIcon = document.createElement("i")
            editIcon.classList.add("fa-solid")
            editIcon.classList.add("fa-pen-to-square")
            editIcon.classList.add("projectEditIcon")
            listElement.appendChild(editIcon);
            pElement.classList.add("activeTitle");
            //
            render.displayActiveTitle(project.projectName);
            render.taskListDisplay(project);
        }
       
        projectListContainer.appendChild(listElement)
        })
    }

    const taskListDisplay = (selectedProject) => {  //ongoing
        render.clearElements(taskContainer)
        selectedProject.taskArray.forEach(task => {
            const taskElement = document.importNode(taskTemplate.content, true) 
            const checkbox = taskElement.querySelector("input");
            const label = taskElement.querySelector("label");
            const dueDate = taskElement.querySelector(".date");
            const prio = taskElement.querySelector(".prio");
            const taskDetails = taskElement.querySelector(".taskDetails");
            const taskDetailsContainer = taskElement.querySelector(".taskDetails-Container");

            
            checkbox.id = task.ID
            checkbox.checked = task.complete;
            label.setAttribute("for", task.ID)
            label.append(task.TaskName)
            taskDetails.append(task.details)
            if(taskDetails === null||""){taskDetails.append("do details provide")}
            dueDate.append("Due Date: " + task.dueDate)
            prio.append(task.priority.toUpperCase())
            if(task.priority  === "low") {prio.style.color ="lightgreen"}
            if(task.priority  === "mid") {prio.style.color ="orange"}
            if(task.priority  === "high") {prio.style.color ="red"}

            taskDetailsContainer.append(taskDetails)
            taskDetailsContainer.append(dueDate)
            taskDetailsContainer.append(prio)
          

            taskContainer.appendChild(taskElement);

        })
    }




    const displayActiveTitle = (title) => {
        const displayTitle = document.querySelector("#currentActiveTitle")
        displayTitle.innerText = ""
        displayTitle.innerText = title;

    }

    return{clearElements,projectListDisplay, displayActiveTitle, taskListDisplay};
})();



//declare DOM  variables for New Project Form
const newProjectInput = document.querySelector('[data-new-project-input]');
const newprojectForm = document.querySelector('[data-new-project-form]');
const projectListContainer = document.querySelector("[data-project-list]");
//declare DOM  variables for New Task Form
const newTaskNameInput = document.querySelector('[data-new-taskName-input]');
const newTaskDetailsInput = document.querySelector('[data-new-taskDetails-input]');
const newTaskDateInput = document.querySelector('[data-new-taskDate-input]');
const newTaskPrioInput = document.querySelector('[data-new-prio-input]');
const addTaskBTN = document.querySelector('[input-add-task-button]');


//initial Load Calls
render.projectListDisplay(projectListContainer);


//Event listners and operations  IIFE module Pattern
const event =(function (){


    //Submit New Task Form
    addTaskBTN.addEventListener("click",e =>{
      console.log( "add log")
      
        const taskName = newTaskNameInput.value;
        if (taskName == null || taskName === "") return
        var TaskDetails = newTaskDetailsInput.value;
        //if (TaskDetails == null || TaskDetails === "") return
        var priority = 'high'//newTaskPrioInput.value
        var date= newTaskDateInput.value.toString() 
        createTask(taskName, TaskDetails,  date ,priority ) ;
        newTaskNameInput.value=null;
        saveLocal();render.projectListDisplay(projectListContainer);
        //reset taskform
        newTaskPrioInput.value = "";
        newTaskDateInput.value = null;
        newTaskDetailsInput.value = null;
        addProjectBTN.classList.remove("hide");
        addProjectForm.classList.add("hide");
    })

    //Submit New Project Form
    newprojectForm.addEventListener("submit",e =>{
        e.preventDefault()
        const projectName = newProjectInput.value;
        if (projectName == null || projectName === "") return
        const project = newProject(projectName);
        newProjectInput.value=null;
        projectList.push(project);
        saveLocal();render.projectListDisplay(projectListContainer);
        addProjectBTN.classList.remove("hide");
        addProjectForm.classList.add("hide");
    })


    //Event Listeners
    newprojectForm.addEventListener("submit",e =>{
    e.preventDefault()
    const projectName = newProjectInput.value;
    if (projectName == null || projectName === "") return
    const project = newProject(projectName);
    newProjectInput.value=null;
    projectList.push(project);
    saveLocal();render.projectListDisplay(projectListContainer);
    addProjectBTN.classList.remove("hide");
    addProjectForm.classList.add("hide");
    })

    //Select Active Project-list
    projectListContainer.addEventListener('click', (e) => {
        //console.log( e.target.tagName.toLowerCase() ) 
    if (e.target.tagName.toLowerCase() === 'li'|| e.target.tagName.toLowerCase() === 'p') {  
        selectedProjectID = e.target.closest("li").dataset.listID
        saveLocal(); 
        render.projectListDisplay();
        event.listenEditProject();
    }
    })


    //Listener for  task checkbox toggle
        const taskContainer = document.querySelector("[data-task-container]");
        taskContainer.addEventListener('click', (e) => {
            //console.log( e.target.tagName.toLowerCase() ) 
            if (e.target.tagName.toLowerCase() === 'input') {  
                //console.log( e.target.closest("input").id ) 
                const selectedProject = projectList.find(project => selectedProjectID === project.ID )
                const selectedTask = selectedProject.taskArray.find(task => task.ID === e.target.closest("input").id )
                
                selectedTask.complete = e.target.checked;
                saveLocal(); 
                render.projectListDisplay();
            }
        });
    
    //listener for delete Completed Tasks
    const deleteCopmepletedBTN = document.querySelector("[delete-completed-BTN]");
    deleteCopmepletedBTN.addEventListener('click', (e) => {
        const selectedProject = projectList.find(project => selectedProjectID === project.ID )
        


        selectedProject.taskArray =  selectedProject.taskArray.filter(task => task.complete === false )
        saveLocal(); render.projectListDisplay();

    });



    

    //Select Active Project-list
    const listenEditProject = () => {
        //event Listeners for EDIT/DELETE active Projects
    const activeProjectContainer = document.querySelector(".active-project");
    const ProjectEditIcon = document.querySelector(".projectEditIcon");
    const activeTitle = document.querySelector(".activeTitle");
    //listener for edit/delete active project
    ProjectEditIcon.addEventListener('click', (e) => {
        activeProjectContainer.removeChild(ProjectEditIcon);
        //create trash icon
        const ProjectDeleteIcon = document.createElement("i")
        ProjectDeleteIcon.classList.add("fa-solid")
        ProjectDeleteIcon.classList.add("fa-trash-can")
        ProjectDeleteIcon.classList.add("ProjectDeleteIcon")
        //create Cancel icon
        const ProjectCancelIcon = document.createElement("i")
        ProjectCancelIcon.classList.add("fa-solid")
        ProjectCancelIcon.classList.add("fa-xmark")
        ProjectCancelIcon.classList.add("ProjectCancelIcon")
        activeProjectContainer.removeChild(activeTitle);
        //create rename form
        const renameInputForm = document.createElement("form")
        renameInputForm.setAttribute("action","");
        //create rename input
        const renameInput = document.createElement("input")
        renameInput.setAttribute("type","input");
        renameInput.classList.add("addProject-input");
        renameInput.value = activeTitle.textContent
        //append everything to display
        activeProjectContainer.appendChild(renameInputForm);
        renameInputForm.appendChild(renameInput);
        activeProjectContainer.appendChild(ProjectDeleteIcon);
        activeProjectContainer.appendChild(ProjectCancelIcon);
        //eventlisteners  for Rename, delete and cancel (set everytime editIcon is clicked)
        renameInputForm.addEventListener('submit', (e) => {
            e.preventDefault()
            projectList.forEach(project =>
                {
                if (project.ID === selectedProjectID) project.projectName = renameInput.value;
                })
            saveLocal(); render.projectListDisplay();
        });
        ProjectDeleteIcon.addEventListener('click', (e) => {
            if (confirm("Are you sure you want to delete this Project?")) {
                // User clicked OK
                projectList =  projectList.filter(project => project.ID !== selectedProjectID )
                selectedProjectID = null;
                saveLocal(); render.projectListDisplay();
              } else {
                // Cancel
              }
        });
        ProjectCancelIcon.addEventListener('click', (e) => {
            saveLocal(); render.projectListDisplay();
            event.listenEditProject();
        });

    })
    }

   
    return{listenEditProject}


})();






if (selectedProjectID !== null){
    event.listenEditProject();
}












//createTask("Jogging", "around gateway for 30mins / 5km", "02/26/2025"  ,"mid") ;








/* 
projectList.forEach(project => {
    if (project.ID === selectedProjectID) {
        project.projectName = "gumana";
    }
})
render.projectListDisplay();
*/






//out UI JS here due to variables  declared at main js is not recognized  by  UI JS after bundling



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