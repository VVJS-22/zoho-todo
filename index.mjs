import { addTodo, getTodos, setTodos, editTodo, toggleTodo, deleteTodo } from "./api/api.mjs";
import { ActiveTask } from "./components/ActiveTask.mjs";
import { CompletedTask } from "./components/CompletedTask.mjs";
import { NoTasks } from "./components/NoTasks.mjs";

if (location.pathname === "/" || location.pathname === "/index.html") {
    renderItems(getTodos() || setTodos({}), true);
} else if (location.pathname === "/completed.html") {
    renderItems(getTodos() || setTodos({}), false);
}

const addBtn = document.querySelector("#addbtn");
addBtn.addEventListener("click", addTodoUi);

const changeActive = document.querySelectorAll(".tick")
changeActive.forEach(item => {
    item.addEventListener("click", () => {
        const id = item.parentElement.parentElement.id;
        toggleTodo(id);
        location.reload()
    })
})

const deleteBtns = document.querySelectorAll(".delete-btn");
deleteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.parentElement.parentElement.id;
        deleteTodo(id)
        location.reload()
    })
})

document.addEventListener("keydown", addTodoUi);

const editBtns = document.querySelectorAll(".edit-btn");
let saveBtns;
editBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const elem = btn.parentElement.parentElement
        const task = elem.querySelector(".editable-task")
        task.removeAttribute("readonly")
        const end = task.value.length;
        task.setSelectionRange(end, end);
        task.focus()
        const saveBtn = document.createElement("img")
        saveBtn.setAttribute("class", "save-btn")
        saveBtn.setAttribute("title", "Save")
        saveBtn.setAttribute("src", "/assets/save.svg")
        saveBtn.setAttribute("alt", "save")
        const btnParent = btn.parentElement
        btnParent.replaceChild(saveBtn, btn);

        saveBtns = document.querySelectorAll(".save-btn");
        saveBtns.forEach(sbtn => {
            sbtn.addEventListener("click", () => {
                const id = sbtn.parentElement.parentElement.id;
                const task = elem.querySelector(".editable-task")
                editTodo(id, task.value)
                task.setAttribute("readonly", "");
                btnParent.replaceChild(btn, sbtn);
            })
        })
    })
})

const editor = document.querySelector(".task-editor");
editor.addEventListener("click", (e) => {
    e.stopPropagation()
    input.focus()
})

const input = document.querySelector("#task-input");
input.addEventListener("input", () => {
    if (input.value !== "") {
        return addBtn.removeAttribute("disabled")
    }
    return addBtn.setAttribute("disabled", "")
})

function renderItems(todos, type) {
    const tasks = document.querySelector("#saved-tasks")
    if (Object.keys(todos).length) {
        let activesHtml = ""
        for (let item in todos) {
            if (todos[item].status === type) {
                activesHtml += type ? ActiveTask(todos[item]) : CompletedTask(todos[item]);
                tasks.innerHTML = activesHtml;
            }
        }
        if (!tasks.hasChildNodes()) {
            tasks.innerHTML = NoTasks("active")
        }
    } else {
        tasks.innerHTML = NoTasks("active");
    }
}

function addTodoUi(event) {
    if (event.keyCode === 13 || event.target.id === "addbtn") {
        const task = input.value;
        if (task.length) {
            addTodo(task);
            input.value = "";
            input.focus();
            addBtn.setAttribute("disabled", "")
            location.reload()
        } else {
            alert("Yeah, yout heart is white but I want more than that!")
        }
    }
}




