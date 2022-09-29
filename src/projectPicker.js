// import { projectList } from "./createProject.js"
import { defaultProject } from "./defaultProject.js"

const projectList = [defaultProject]

projectList.forEach((project,index) => {
    const projectSelector = document.querySelector('#project')
    const options = document.createElement('option')
    options.value = project[index].project
    options.textContent = project[index].project
    projectSelector.appendChild(options)

})

export { projectList }