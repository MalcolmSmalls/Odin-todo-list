import { listDOM } from "./DOM.js"
import "./getTask.js"
import { defaultProject } from './getTask.js'

const deleteTask = () => {
    const deleteBtn = document.querySelector('.deleteTask')
    deleteBtn.addEventListener('click', function(e) {
        let dataIndex = Number(e.target.attributes[1].value)
        defaultProject.splice(dataIndex)
        document.querySelector(`.li${dataIndex}`).remove()
    })





}


export { deleteTask }