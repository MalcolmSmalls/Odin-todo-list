const defaultProject = [
    {title: 'what', description: ';kl;l', dueDate: '', priority: undefined, project: 'Default'},
    {title: 'hello', description: ';kl;l', dueDate: '', priority: undefined, project: 'Default'},
    {title: 'anuvva', description: ';kl;l', dueDate: '', priority: undefined, project: 'Default'}]



const defaultVal = () => {
    document.querySelector('#project').value = "Default"
}

export { defaultProject }
export { defaultVal }