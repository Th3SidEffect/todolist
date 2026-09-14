const taskInput = document.getElementById("taskinput");
const newtask = document.getElementById("newtask");
const taskCard = document.getElementById("taskcard");
let tasks = [];

newtask.addEventListener("click", 
    () => {
        if (taskInput.value !== ""){ 
           const input = document.createElement("div");
           const done = document.createElement("button");
           const mainCard = document.createElement("div");
           const del = document.createElement("button");
           mainCard.id = "maincard"
           del.textContent = "X";
           del.id = "delete";
           done.id = "done";
           done.textContent = "✓";
           input.id = "inputdiv";
           input.textContent = taskInput.value;
           taskCard.appendChild(mainCard)
           mainCard.appendChild(input);
           mainCard.appendChild(done);
           mainCard.appendChild(del);
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
            }
           )
        }
        else{
            alert("Please Enter a Task!");
        }
    }
)

