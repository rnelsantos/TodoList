
// save point for overall Project List
const LOCAL_STORAGE_LIST_key = "project.lists"
let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_key))||[];

// save point for current Selected local
const LOCAL_STORAGE_SELECTED_PROJECT_KEY_ID = "project.selected.list"
let selectedProjectID = null;
selectedProjectID = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY_ID));


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
function newTask (name, details, dueDate,priority,complete) {
    const TaskName = name;
    return {TaskName,details, dueDate,priority,complete}
}

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

        }

        projectListContainer.appendChild(listElement)
        })
    }

    return{clearElements,projectListDisplay};
})();



//declare DOM  variables
const newProjectInput = document.querySelector('[data-new-project-input]');
const newprojectForm = document.querySelector('[data-new-project-form]');
const projectListContainer = document.querySelector("[data-project-list]");

//initial Load Calls
render.projectListDisplay(projectListContainer);


//Event listners and operations  IIFE module Pattern
const event =(function (){

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
    console.log( e.target.tagName.toLowerCase() ) 
    if (e.target.tagName.toLowerCase() === 'li'|| e.target.tagName.toLowerCase() === 'p') {  
        selectedProjectID = e.target.closest("li").dataset.listID
        saveLocal(); 
        render.projectListDisplay();
        event.listenEditProject();
    }
    })
    

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
        //actual eventlisteners  for Rename,delete and cancel (set every editIcon is clicked)
        renameInputForm.addEventListener('submit', (e) => {
            e.preventDefault()
            projectList.forEach(project =>
                {
                if (project.ID === selectedProjectID) project.projectName = renameInput.value;
                })
            saveLocal(); render.projectListDisplay();
        });
        ProjectDeleteIcon.addEventListener('click', (e) => {
            projectList =  projectList.filter(project => project.ID !== selectedProjectID )
            selectedProjectID = null;
            saveLocal(); render.projectListDisplay();
        });
        ProjectCancelIcon.addEventListener('click', (e) => {
            saveLocal(); render.projectListDisplay();
        });
    })
    }


    
    return{listenEditProject};
})();





event.listenEditProject();












/* 
projectList.forEach(project => {
    if (project.ID === selectedProjectID) {
        project.projectName = "gumana";
    }
})
render.projectListDisplay();
*/