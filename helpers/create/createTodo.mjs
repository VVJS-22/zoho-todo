import { addTodo } from "../../api/api.mjs";
import { renderTodos } from "../read/renderTodos.mjs";

const input = document.querySelector("#task-input");
const addBtn = document.querySelector("#addbtn");

export const createTodo = (event) => {
    if (event.keyCode === 13 || event.target.id === "addbtn") {
        const task = input.value;
        if (task.length) {
            addTodo(task);
            input.value = "";
            input.focus();
            addBtn.setAttribute("disabled", "")
            renderTodos();
        } else {
            alert("Yeah, your heart is white but I want more than that!")
        }
    }
}