import { renderTodos } from "./renderTodos.mjs";
import { toggleTodo } from "../api/api.mjs";

export const changeActive = (elements) => {
    elements.forEach(item => {
        item.addEventListener("click", () => {
            const id = item.parentElement.parentElement.id;
            toggleTodo(id);
            renderTodos();
        })
    })
}