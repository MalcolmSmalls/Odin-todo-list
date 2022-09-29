// import './getTask.js'
import { defaultProject } from "./defaultProject.js"
import { currentProj } from "./projectPicker.js"


const listDOM = () => {
    // const addBtn = document.createElement('button')
    // addBtn.textContent = 'Add'
    // addBtn.className = 'addTodoItem'
    // document.querySelector('body').appendChild(addBtn)
    const listUL = document.querySelector('.todoList')
    const li = document.createElement('li')
    if(Array.isArray(currentProj) === false){
        return
    }else{
        currentProj.forEach((task, index)=>{
            li.className = `li${index}`
            listUL.appendChild(li.cloneNode(true)).innerHTML = `${task.title} | <span class = "deleteTask" data-index = "${index}" >X</span> | <span class = "editTask" data-index = "${index}">Edit</span> |`
    
        })
        

    }





}

export { listDOM }