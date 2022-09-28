const createProject = (() => {
    const createProj = document.querySelector('#project')
    const projectArea = document.querySelector('.projectSelected')
    const projectName = () => {
        if(createProj.value="newProject"){
            projectArea.innerHTML = `<label for="projectName">Project Name:</label> <input type="text" name="projectName" id="projectName">`
        }
        console.log(createProj.value)
    }

    createProj.addEventListener('click', projectName)

})()

export { createProject }