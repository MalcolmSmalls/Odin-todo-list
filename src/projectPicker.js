// import { projectList } from "./createProject.js"
import { defaultProject } from "./defaultProject.js"
import { listDOM } from "./DOM.js"

const otherProj = [
    {title: 'hatttttet', description: ';kl;l', dueDate: '', priority: undefined, project: 'otherPro'},
    {title: 'hggdgf', description: ';kl;l', dueDate: '', priority: undefined, project: 'otherProj'},
    {title: 'anuvfdgdgdfva', description: ';kl;l', dueDate: '', priority: undefined, project: 'otherProj'}]

const projectList = [defaultProject, otherProj]


let currentProj = defaultProject

projectList.forEach((project,index) => {
    const projectSelector = document.querySelector('#project')
    const options = document.createElement('option')
    options.value = project[index].project
    options.textContent = project[index].project
    options.className = project[index].project
    options.setAttribute('data-attribute',`${index}`)
    projectSelector.appendChild(options)
    const pickProj = document.querySelector(`#project`)
    const switchProj = (e) => {
        document.querySelector('.todoList').innerHTML = ""
        currentProj = projectList[e.target.options.selectedIndex-1]
        listDOM()
    }
    pickProj.addEventListener('change', switchProj)

})

export { projectList }
export { currentProj }