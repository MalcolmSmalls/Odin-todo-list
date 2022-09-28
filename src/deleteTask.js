import { listDOM } from "./DOM.js"
import "./getTask.js"
import { defaultProject } from "./defaultProject.js"

const deleteTask = () => {
    const deleteBtn = document.querySelectorAll('.deleteTask')
    deleteBtn.forEach(item => {
        item.addEventListener('click', function(e) {
            let dataIndex = Number(e.target.attributes[1].value)
            console.log(dataIndex)
            defaultProject.splice(dataIndex, 1)
            document.querySelector(`.li${dataIndex}`).remove()
            console.log(defaultProject)
        })


    })

}


export { deleteTask }