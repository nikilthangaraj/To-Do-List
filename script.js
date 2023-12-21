
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    
    li.onclick = function() {
        this.parentNode.removeChild(this);
    };

    taskList.appendChild(li);
    taskInput.value = "";
}
