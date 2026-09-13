const taskInput = document.getElementById("taskinput");
const newtask = document.getElementById("newtask");
const taskCard = document.getElementById("taskcard");

newtask.addEventListener("click", 
    () => {
        if (taskInput.value !== ""){ 
           const input = document.createElement("div");
           input.style.margin = "10px"
           input.style.border = "1px solid black";
           input.style.borderRadius = "5px";
           input.style.width = "fit-content";
           input.style.padding = "20px";
           input.style.backgroundColor = "rgb(230, 230, 230)";
           input.textContent = taskInput.value;
           taskCard.appendChild(input);
           taskInput.value = "";
        }
        else{
            alert("Please Enter a Task!");
        }
    }
)