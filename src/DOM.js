import './getTask.js'


const listDOM = (defaultProject) => {
    const listUL = document.querySelector('.todoList')
    const li = document.createElement('li')
    defaultProject.forEach((task, index)=>{
        li.className = `li${index}`
        listUL.appendChild(li).innerHTML = `${task.title} | <span class = "deleteTask" data-index = "${index}" >X</span> | <span class = "editTask">Edit</span> |`
    })
    




}

export { listDOM }