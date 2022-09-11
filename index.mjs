import { createTodo } from "./helpers/createTodo.mjs";
import { renderTodos } from "./helpers/renderTodos.mjs";
/*
1. Render Items on every change.
2. Operations:
    1) Add Todo
    2) Edit todo
    3) Save Todo
    4) Delete Todo

*/
const addBtn = document.querySelector("#addbtn");
const editor = document.querySelector(".task-editor");
const input = document.querySelector("#task-input");

editor.addEventListener("click", (e) => {
    e.stopPropagation()
    input.focus()
})
input.addEventListener("input", () => {
    if (input.value !== "") {
        return addBtn.removeAttribute("disabled")
    }
    return addBtn.setAttribute("disabled", "")
})

renderTodos();
addBtn.addEventListener("click", createTodo);
document.addEventListener("keydown", createTodo);









