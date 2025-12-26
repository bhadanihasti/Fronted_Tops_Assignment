const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <span class="delete">❌</span>
    `;

    li.querySelector(".delete").addEventListener("click", function () {
        li.remove();
    });

    taskList.appendChild(li);

    taskInput.value = "";
}
