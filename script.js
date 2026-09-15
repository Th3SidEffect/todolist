const taskInput = document.getElementById("taskinput");
const newtask = document.getElementById("newtask");
const taskCard = document.getElementById("taskcard");
let tasks = [];



function oldTaskLoader(task){
    const input = document.createElement("div");
    const done = document.createElement("button");
    const mainCard = document.createElement("div");
    const del = document.createElement("button");
    taskCard.appendChild(mainCard)
    mainCard.appendChild(input);
    mainCard.appendChild(done);
    mainCard.appendChild(del);
    mainCard.id = "maincard"
    del.textContent = "X";
    del.id = "delete";
    done.id = "done";
    done.textContent = "✓";
    input.id = "inputdiv";
    input.textContent = task;

    done.addEventListener("click", 
        () => {
            input.style.backgroundColor = "gray";
            input.style.transform = "translateY(0px)";
            input.style.boxShadow = "none";
        }
    )

    del.addEventListener("click", 
            () => {
                mainCard.remove();
                tasks.forEach(task => {
                    if(task == input.textContent){
                        const index = tasks.indexOf(task);
                        if (index !== -1){
                            tasks.splice(index, 1);
                            localStorage.setItem("tasks", JSON.stringify(tasks));
                        }
                    }
                })
            }
           )
}

newtask.addEventListener("click", 
    () => {
        if (taskInput.value !== ""){
           const input = document.createElement("div");
           const done = document.createElement("button");
           const mainCard = document.createElement("div");
           const del = document.createElement("button");
           taskCard.appendChild(mainCard)
           mainCard.appendChild(input);
           mainCard.appendChild(done);
           mainCard.appendChild(del);
           mainCard.id = "maincard"
           del.textContent = "X";
           del.id = "delete";
           done.id = "done";
           done.textContent = "✓";
           input.id = "inputdiv";
           input.textContent = taskInput.value;
           tasks.push(taskInput.value);
           localStorage.setItem("tasks", JSON.stringify(tasks));
           taskInput.value = "";

           done.addEventListener("click", 
            () => {
                input.style.backgroundColor = "gray";
                input.style.transform = "translateY(0px)";
                input.style.boxShadow = "none";
            }
           )

           del.addEventListener("click", 
            () => {
                mainCard.remove();
                tasks.forEach(task => {
                    if(task == input.textContent){
                        const index = tasks.indexOf(task);
                        if (index !== -1){
                            tasks.splice(index, 1);
                            localStorage.setItem("tasks", JSON.stringify(tasks));
                        }
                    }
                })
            }
           )
        }
        else{
            alert("Please Enter a Task!");
        }
    }
)

window.addEventListener("DOMContentLoaded", 
    () => {
        const savedTasks = localStorage.getItem("tasks");

        tasks = savedTasks ? JSON.parse(savedTasks) : [];

        tasks.forEach(task => {
            oldTaskLoader(task);
        })
    }
)