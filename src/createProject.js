import { projectList } from './projectPicker.js'
import { currentProj } from "./projectPicker.js"
import "./getTask.js"

const createProject = (() => {
    const createProj = document.querySelector('#project')
    const projectArea = document.querySelector('.projectSelected')
    const projectName = (e) => {
        if(e.target.value==="newProject"){
            projectArea.innerHTML = `<label for="projectName">Project Name:</label> <input type="text" name="projectName" id="projectName"> <button class="createNewProject">Add New Project</button>`

            document.querySelector('.createNewProject').addEventListener('click', function(){
                let newProj = document.querySelector('#projectName').value
                if(newProj === ""){
                    return
                }else{
                    const newOption = document.createElement('option')
                    newOption.value = `${newProj}`
                    newOption.textContent = `${newProj}`
                    newProj = []
                    projectList.push(newProj)
                    currentProj = projectList[projectList.length-1]
                    document.querySelector('#project').appendChild(newOption)
                    document.querySelector('#project').value = newOption.value
                    console.log(projectList)
    
                }
    
            })
        }

        }



    createProj.addEventListener('change', projectName)

})()

export { createProject }
// export { projectList }