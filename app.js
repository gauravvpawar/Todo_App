
//get acccess addtask element
const response = document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create list item
    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;

    // create the delete button in created list item
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    // remove the element in the given unorderedList
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // append elements in list
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    console.log("task added successfully")
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

