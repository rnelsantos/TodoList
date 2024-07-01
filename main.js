
const projectList = [];

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
        const listElement = document.createElement("li")
        listElement.dataset.listID = project.ID;
        listElement.classList.add("menuBar");
        listElement.innerText =project.projectName;
        projectListContainer.appendChild(listElement)
        })
    }

    return{clearElements,projectListDisplay};
})();



console.log(projectList)










//declare DOM  variables
const newProjectInput = document.querySelector('[data-new-project-input]');
const newprojectForm = document.querySelector('[data-new-project-form]');
const projectListContainer = document.querySelector("[data-project-list]");




newprojectForm.addEventListener("submit",e =>{
    e.preventDefault()
    const projectName = newProjectInput.value;
    if (projectName == null || projectName === "") return
    const project = newProject(projectName);
    newProjectInput.value=null;
    projectList.push(project);
    render.projectListDisplay(projectListContainer);

})
