(()=>{"use strict";const e=[{title:"what",description:";kl;l",dueDate:"",priority:void 0,project:"Default"},{title:"hello",description:";kl;l",dueDate:"",priority:void 0,project:"Default"},{title:"anuvva",description:";kl;l",dueDate:"",priority:void 0,project:"Default"}],t=[e,[{title:"hatttttet",description:";kl;l",dueDate:"",priority:void 0,project:"otherPro"},{title:"hggdgf",description:";kl;l",dueDate:"",priority:void 0,project:"otherProj"},{title:"anuvfdgdgdfva",description:";kl;l",dueDate:"",priority:void 0,project:"otherProj"}]];let o=e;t.forEach(((e,c)=>{const l=document.querySelector("#project"),n=document.createElement("option");n.value=e[c].project,n.textContent=e[c].project,n.className=e[c].project,n.setAttribute("data-attribute",`${c}`),l.appendChild(n),document.querySelector("#project").addEventListener("change",(e=>{document.querySelector(".todoList").innerHTML="",o=t[e.target.options.selectedIndex-1],r()}))}));const r=()=>{const e=document.querySelector(".todoList"),t=document.createElement("li");o.forEach(((o,r)=>{t.className=`li${r}`,e.appendChild(t.cloneNode(!0)).innerHTML=`${o.title} | <span class = "deleteTask" data-index = "${r}" >X</span> | <span class = "editTask">Edit</span> |`,console.log(o.title)}))},c=(document.querySelector(".addTodoItem").addEventListener("click",(()=>{const t=document.querySelector("#itemTitle").value,r=document.querySelector("#itemDescription").value,l=document.querySelector("#itemDueDate").value,n=document.querySelector('input[name="itemImportance"]:checked')?.value,i=c(t,r,l,n,o,"incomplete");e.push(i),console.log(e),console.log("works!")})),(e,t,o,r,c,l)=>({title:e,description:t,dueDate:o,priority:r,project:c}));(()=>{const e=document.querySelector("#project"),o=document.querySelector(".projectSelected");e.addEventListener("change",(e=>{"newProject"===e.target.value&&(o.innerHTML='<label for="projectName">Project Name:</label> <input type="text" name="projectName" id="projectName"> <button class="createNewProject">Add New Project</button>',document.querySelector(".createNewProject").addEventListener("click",(function(){const e=document.querySelector("#projectName").value;if(""!==e){const o=document.createElement("option");o.value=`${e}`,o.textContent=`${e}`,t.push(e),document.querySelector("#project").appendChild(o),console.log(t)}})))}))})(),r(),document.querySelectorAll(".deleteTask").forEach((t=>{t.addEventListener("click",(function(t){let o=Number(t.target.attributes[1].value);e.splice(o,1),document.querySelector(`.li${o}`).remove()}))}))})();