(()=>{"use strict";const e=[{title:"what",description:";kl;l",dueDate:"",priority:void 0,project:"Default"},{title:"hello",description:";kl;l",dueDate:"",priority:void 0,project:"Default"},{title:"anuvva",description:";kl;l",dueDate:"",priority:void 0,project:"Default"}],t=(document.querySelector(".addTodoItem").addEventListener("click",(()=>{const o=document.querySelector("#itemTitle").value,c=document.querySelector("#itemDescription").value,r=document.querySelector("#itemDueDate").value,l=document.querySelector('input[name="itemImportance"]:checked')?.value,n=t(o,c,r,l,"Default","incomplete");e.push(n),console.log(e),console.log("works!")})),(e,t,o,c,r,l)=>({title:e,description:t,dueDate:o,priority:c,project:r})),o=[e];let c;o.forEach(((e,t)=>{const o=document.querySelector("#project"),r=document.createElement("option");r.value=e[t].project,r.textContent=e[t].project,r.className=e[t].project,o.appendChild(r),document.querySelector("#project").addEventListener("change",(e=>{c=e.target.value,console.log(c)}))})),(()=>{const e=document.querySelector("#project"),t=document.querySelector(".projectSelected");e.addEventListener("change",(e=>{"newProject"===e.target.value&&(t.innerHTML='<label for="projectName">Project Name:</label> <input type="text" name="projectName" id="projectName"> <button class="createNewProject">Add New Project</button>',document.querySelector(".createNewProject").addEventListener("click",(function(){const e=document.querySelector("#projectName").value;if(""!==e){const t=document.createElement("option");t.value=`${e}`,t.textContent=`${e}`,o.push(e),document.querySelector("#project").appendChild(t),console.log(o)}})))}))})(),(()=>{const t=document.querySelector(".todoList"),o=document.createElement("li");e.forEach(((e,c)=>{o.className=`li${c}`,t.appendChild(o.cloneNode(!0)).innerHTML=`${e.title} | <span class = "deleteTask" data-index = "${c}" >X</span> | <span class = "editTask">Edit</span> |`,console.log(e.title)}))})(),document.querySelectorAll(".deleteTask").forEach((t=>{t.addEventListener("click",(function(t){let o=Number(t.target.attributes[1].value);e.splice(o,1),document.querySelector(`.li${o}`).remove()}))}))})();