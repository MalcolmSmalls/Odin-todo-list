import { currentProj } from "./projectPicker.js"
import { listDOM } from "./DOM.js"
import { TodoFactory } from "./todoFactory.js"
import { deleteTask } from "./deleteTask.js"
import { defaultProject } from "./defaultProject.js"

const editTask = () => {
    const editTask = document.querySelectorAll('.editTask')
    editTask.forEach(item => {
        item.addEventListener('click', function(e) {
            let dataIndex = Number(e.target.attributes[1].value)
            document.querySelector('#itemTitle').value = currentProj[dataIndex].title
            document.querySelector('#itemDescription').value = currentProj[dataIndex].description
            document.querySelector('#itemDueDate').value = currentProj[dataIndex].dueDate
            if(currentProj[dataIndex].priority === 'High'){
                document.querySelector('#highImportance').checked = true
            }else if(currentProj[dataIndex].priority === "Medium"){
                document.querySelector('#mediumImportance').checked = true
            }else if(currentProj[dataIndex].priority === "Little"){
                document.querySelector('#littleImportance').checked = true
            }else{
                return
            }
            const editBtn = document.createElement('button')
            editBtn.textContent = 'Edit'
            editBtn.className = 'edit-Btn'
            document.querySelector('body').appendChild(editBtn)
            document.querySelector('.addTodoItem').style.display='none'
            document.querySelector('.edit-Btn').addEventListener('click', function(){
                currentProj[dataIndex].title = document.querySelector('#itemTitle').value
                currentProj[dataIndex].description = document.querySelector('#itemDescription').value
                currentProj[dataIndex].dueDate = document.querySelector('#itemDueDate').value
                currentProj[dataIndex].priority = document.querySelector('input[name="itemImportance"]:checked')?.value
                document.querySelector('.todoList').innerHTML = ""
                document.querySelector('#itemTitle').value = ""
                document.querySelector('#itemDescription').value = ""
                document.querySelector('#itemDueDate').value = ""
                document.querySelector('#highImportance').checked = false
                document.querySelector('#mediumImportance').checked = false
                document.querySelector('#littleImportance').checked = false
                document.querySelector('.edit-Btn').style.display='none'
                document.querySelector('.addTodoItem').style.display='inline'

                listDOM()
                deleteTask()
            })
        })
    })

}

export { editTask }