import { projectList } from './projectPicker.js'

const createProject = (() => {
    const createProj = document.querySelector('#project')
    const projectArea = document.querySelector('.projectSelected')
    const projectName = () => {
        if(createProj.value="newProject"){
            projectArea.innerHTML = `<label for="projectName">Project Name:</label> <input type="text" name="projectName" id="projectName"> <button class="createNewProject">Add New Project</button>`

        }
        document.querySelector('.createNewProject').addEventListener('click', function(){
            const newProj = document.querySelector('#projectName').value
            if(newProj === ""){
                return
            }else{
                projectList.push(newProj)
                console.log(projectList)

            }

        })
    }


    createProj.addEventListener('click', projectName)

})()

export { createProject }
// export { projectList }