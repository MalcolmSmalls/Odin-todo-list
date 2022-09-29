import { projectList } from './projectPicker.js'

const createProject = (() => {
    const createProj = document.querySelector('#project')
    const projectArea = document.querySelector('.projectSelected')
    const projectName = (e) => {
        if(e.target.value==="newProject"){
            projectArea.innerHTML = `<label for="projectName">Project Name:</label> <input type="text" name="projectName" id="projectName"> <button class="createNewProject">Add New Project</button>`

            document.querySelector('.createNewProject').addEventListener('click', function(){
                const newProj = document.querySelector('#projectName').value
                if(newProj === ""){
                    return
                }else{
                    const newOption = document.createElement('option')
                    newOption.value = `${newProj}`
                    newOption.textContent = `${newProj}`
                    projectList.push(newProj)
                    document.querySelector('#project').appendChild(newOption)
                    console.log(projectList)
    
                }
    
            })
        }

        }



    createProj.addEventListener('change', projectName)

})()

export { createProject }
// export { projectList }