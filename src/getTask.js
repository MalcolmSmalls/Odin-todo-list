import { listDOM } from "./DOM.js"
import { TodoFactory } from "./todoFactory.js"
import { deleteTask } from "./deleteTask.js"
import { defaultProject } from "./defaultProject.js"
// const defaultProject = []

const getTask = (() => {
    const storeTask = () => {
        const taskTitle = document.querySelector('#itemTitle').value
        const taskDescription = document.querySelector('#itemDescription').value
        const taskDueDate = document.querySelector('#itemDueDate').value
        const taskPriority = document.querySelector('input[name="itemImportance"]:checked')?.value
        const taskProject = "Default"
        const task = TodoFactory(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject, 'incomplete')
        defaultProject.push(task)
        console.log(defaultProject)
        console.log('works!')
        listDOM()
        deleteTask()
    }
    const submitBtn = document.querySelector('.addTodoItem')
    submitBtn.addEventListener('click', storeTask)











})()

export { getTask }
// export {defaultProject}