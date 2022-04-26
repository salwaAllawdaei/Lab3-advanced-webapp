//console.log("dfdsfsd");
let todoServiceUrl = "https://localhost:7205/api/todo";

let todoEl = document.getElementById("items");
document.getElementById("task-submit").addEventListener("click", async () => {
    let taskNameEl = document.getElementById("task-name");
    let taskDescEl = document.getElementById("task-desc");
    let taskCompleteEl = document.getElementById("task-complete");
    let taskMustEl = document.getElementById("task-must");
    let taskName = taskNameEl.value;
    let taskDesc = taskDescEl.value;
    let taskComplete = taskCompleteEl.checked;
    let taskMust = taskMustEl.checked;
    if (taskName.trim() != '') {
        let newTask = { task: taskName, instructions: taskDesc, isComplete: taskComplete, aMustDo: taskMust };

        let newTodoData = await fetch(todoServiceUrl,
            {
                cache: 'no-cache',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(newTask)
            });
        getTodos();
        taskNameEl.value = "";
    }
});

document.getElementById("edit-task-submit").addEventListener("click", async () => {
    let editTaskIdEl = document.getElementById("edit-task-id");
    let editTaskId = editTaskIdEl.value;
    if (editTaskId.trim() != '') {
        let editTask = { todoItemId: editTaskId };
        let editTodo = await fetch((todoServiceUrl + "/" + editTaskId),
            {
                cache: 'no-cache',
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(editTask)
            });
        getTodos();
        editTaskIdEl.value = "";
    }
});

document.getElementById("del-task-submit").addEventListener("click", async () => {
    let delTaskIdEl = document.getElementById("del-task-id");
    let delTaskId = delTaskIdEl.value;
    if (delTaskId.trim() != '') {
        let delTask = { todoItemId: delTaskId };
        let delTodo = await fetch((todoServiceUrl + "/" + delTaskId),
            {
                cache: 'no-cache',
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(delTask)
            });
        getTodos();
        delTaskIdEl.value = "";
    }
});

let getTodos = async function () {
    let todoData = await (await fetch(todoServiceUrl,
        {
            cache: 'no-cache',
            method: 'GET'
        })).json();
    let html = "";
    html += "<ol>";
    html += "<div> Id  Task Name</div>";
    for (let i = 0; i < todoData.length; i++) {
        html += `<li class="complete${todoData[i].isComplete}">${todoData[i].todoItemId}  ${todoData[i].task}</li>`;
    }
    html += "</ol>";
    todoEl.innerHTML = html;
}

getTodos();