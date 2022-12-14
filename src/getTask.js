import { listDOM } from "./DOM.js"
import { TodoFactory } from "./todoFactory.js"
import { deleteTask } from "./deleteTask.js"
import { defaultProject } from "./defaultProject.js"
import { currentProj } from "./projectPicker.js"
import { editTask } from "./editTask.js"
// const defaultProject = []

const getTask = (() => {
    const storeTask = () => {
        const taskTitle = document.querySelector('#itemTitle').value
        const taskDescription = document.querySelector('#itemDescription').value
        const taskDueDate = document.querySelector('#itemDueDate').value
        const taskPriority = document.querySelector('input[name="itemImportance"]:checked')?.value
        const taskProject = currentProj
        const task = TodoFactory(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject, 'incomplete')
        currentProj.push(task)
        document.querySelector('.todoList').innerHTML = ""
        listDOM()
        deleteTask()
        editTask()

    }
    const submitBtn = document.querySelector('.addTodoItem')
    submitBtn.addEventListener('click', storeTask)











})()

export { getTask }
// export {defaultProject}