const taskInput = document.getElementById("taskinput");
const newtask = document.getElementById("newtask");
const taskCard = document.getElementById("taskcard");
const taskNumber = document.getElementById("counter");
const clearCompleted = document.getElementById("clear-completed");
let tasks = [];





function taskCreator(task){
    const input = document.createElement("input");
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
    input.type = "text";
    input.className = "inputdiv";
    input.value = task;

    done.addEventListener("click", 
        () => {
            input.style.backgroundColor = "gray";
            input.style.transform = "translateY(0px)";
            input.style.boxShadow = "none";
            removeItemFromLocalStorage(input.value);
        }
    )

    del.addEventListener("click", 
            () => {
                mainCard.remove();
                removeItemFromLocalStorage(input.value);
            }
           )

    clearCompleted.addEventListener("click", 
        () => {
            if(input.style.backgroundColor == "gray"){
                mainCard.remove();
            }
        }
    )
}

function removeItemFromLocalStorage(delObject){
    tasks.forEach(task => {
        if(task == delObject){
            const index = tasks.indexOf(task);
            if (index !== -1){
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
        }
    })
}


newtask.addEventListener("click", 
    () => {
        if (taskInput.value !== ""){
          taskCreator(taskInput.value);
          tasks.push(taskInput.value);
          localStorage.setItem("tasks", JSON.stringify(tasks));
          taskInput.value = "";
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
            taskCreator(task);
        })
    }
)

window.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        const inps = document.querySelectorAll(".inputdiv");
        const updatedTasks = [];

        inps.forEach(inp => {
            if (inp.style.backgroundColor !== "gray" && inp.value.trim() !== "") {
                updatedTasks.push(inp.value);
            }
        });

        tasks = updatedTasks;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, 1000);
});

window.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        const noOfTasks = JSON.parse(localStorage.getItem("tasks"));
        taskNumber.textContent = noOfTasks.length;
    })
})