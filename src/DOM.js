// import './getTask.js'
import { defaultProject } from "./defaultProject.js"
import { currentProj } from "./projectPicker.js"


const listDOM = () => {
    const listUL = document.querySelector('.todoList')
    const li = document.createElement('li')
    currentProj.forEach((task, index)=>{
        li.className = `li${index}`
        listUL.appendChild(li.cloneNode(true)).innerHTML = `${task.title} | <span class = "deleteTask" data-index = "${index}" >X</span> | <span class = "editTask">Edit</span> |`
        console.log(task.title)
    })
    




}

export { listDOM }