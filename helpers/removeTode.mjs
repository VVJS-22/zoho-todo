import { renderTodos } from "./renderTodos.mjs";
import { deleteTodo } from "../api/api.mjs";

export const removeTodo = (elements) => {
    elements.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.parentElement.parentElement.id;
            deleteTodo(id)
            renderTodos()
        })
    })
    
}
