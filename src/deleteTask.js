import { listDOM } from "./DOM.js"
import "./getTask.js"
import { defaultProject } from "./defaultProject.js"

const deleteTask = () => {
    const deleteBtn = document.querySelector('.deleteTask')
    deleteBtn.addEventListener('click', function(e) {
        let dataIndex = Number(e.target.attributes[1].value)
        defaultProject.splice(dataIndex)
        document.querySelector(`.li${dataIndex}`).remove()
        console.log(defaultProject)
    })





}


export { deleteTask }