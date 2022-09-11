import { addTodo } from "./api/api.mjs";
import { renderTodos } from "./helpers/renderTodos.mjs";


/*
1. Render Items on every change.
2. Operations:
    1) Add Todo
    2) Edit todo
    3) Save Todo
    4) Delete Todo

*/

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

renderTodos();


const addTodoUi = (event) => {
    if (event.keyCode === 13 || event.target.id === "addbtn") {
        const task = input.value;
        if (task.length) {
            addTodo(task);
            input.value = "";
            input.focus();
            addBtn.setAttribute("disabled", "")
            renderTodos();
        } else {
            alert("Yeah, yout heart is white but I want more than that!")
        }
    }
}

const addBtn = document.querySelector("#addbtn");
addBtn.addEventListener("click", addTodoUi);
document.addEventListener("keydown", addTodoUi);









