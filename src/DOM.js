import './getTask.js'


const listDOM = (defaultProject) => {
    const listUL = document.querySelector('.todoList')
    const li = document.createElement('li')
    defaultProject.forEach((task, index)=>{
        listUL.appendChild(li).innerHTML = `${task.title}`
    })
    




}

export { listDOM }