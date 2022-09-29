// import { projectList } from "./createProject.js"
import { defaultProject } from "./defaultProject.js"

const projectList = [defaultProject]
let currentProj

projectList.forEach((project,index) => {
    const projectSelector = document.querySelector('#project')
    const options = document.createElement('option')
    options.value = project[index].project
    options.textContent = project[index].project
    options.className = project[index].project
    projectSelector.appendChild(options)
    const pickProj = document.querySelector(`#project`)
    const switchProj = (e) => {
        currentProj = e.target.value
        console.log(currentProj)
    }
    pickProj.addEventListener('change', switchProj)

})

export { projectList }
export { currentProj }