
// save point for overall Project List
const LOCAL_STORAGE_LIST_key = "project.lists"
let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_key))||[];

// save point for current Selected local
const LOCAL_STORAGE_SELECTED_PROJECT_KEY_ID = "project.selected.list"
let selectedProjectID = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY_ID))




function saveLocal() {
    localStorage.setItem(LOCAL_STORAGE_LIST_key,JSON.stringify(projectList));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY_ID,JSON.stringify(selectedProjectID))
    
}

//Project Constructor
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

//create IIFE module Pattern
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




//Event Listeners
newprojectForm.addEventListener("submit",e =>{
    e.preventDefault()
    const projectName = newProjectInput.value;
    if (projectName == null || projectName === "") return
    const project = newProject(projectName);
    newProjectInput.value=null;
    projectList.push(project);
    saveLocal();render.projectListDisplay(projectListContainer);

})




//display Local Stored upon load
render.projectListDisplay(projectListContainer);

projectListContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectedProjectID = e.target.dataset.listID
        saveLocal(); render.projectListDisplay();

//event Listeners for edit/delete active Projects
const activeProjectContainer = document.querySelector(".active-project");
const ProjectEditIcon = document.querySelector(".projectEditIcon");
const activeTitle = document.querySelector(".activeTitle");

        ProjectEditIcon.addEventListener('click', (e) => {
        activeProjectContainer.removeChild(ProjectEditIcon);
        const ProjectDeleteIcon = document.createElement("i")
        ProjectDeleteIcon.classList.add("fa-solid")
        ProjectDeleteIcon.classList.add("fa-trash-can")
        ProjectDeleteIcon.classList.add("ProjectDeleteIcon")
        activeProjectContainer.removeChild(activeTitle);
        console.log(activeTitle.textContent);
        const renameInput = document.createElement("input")
        renameInput.setAttribute("type","input");
        renameInput.classList.add("addProject-input");
        renameInput.value = activeTitle.textContent
    
       
         
        activeProjectContainer.appendChild(renameInput);
        activeProjectContainer.appendChild(ProjectDeleteIcon);

            
            ProjectDeleteIcon.addEventListener('click', (e) => {
            projectList =  projectList.filter(project => project.ID !== selectedProjectID )
            selectedProjectID = null;
            saveLocal(); render.projectListDisplay();
            });

            /*
            <input 
            data-new-project-input 
            class="addProject-input" 
            type="text" 
            placeholder="Project Name"
            />
            */





        })
    }
})


/* 
projectList.forEach(project => {
    if (project.ID === selectedProjectID) {
        project.projectName = "gumana";
    }
})
render.projectListDisplay();
*/