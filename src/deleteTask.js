import { listDOM } from "./DOM.js"
import "./getTask.js"
import { defaultProject } from "./defaultProject.js"
import { currentProj } from "./projectPicker.js"


const deleteTask = () => {
    const deleteBtn = document.querySelectorAll('.deleteTask')
    deleteBtn.forEach(item => {
        item.addEventListener('click', function(e) {
            let dataIndex = Number(e.target.attributes[1].value)
            currentProj.splice(dataIndex, 1)
            document.querySelector(`.li${dataIndex}`).remove()
        })


    })

}


export { deleteTask }