import { editTodo } from "../../../api/api.mjs";
import { swapWithSibiling } from "../swapWithSibiling.mjs";

export const saveTodo = (elements) => {
    elements.forEach(sbtn => {
        sbtn.addEventListener("click", () => {
            const id = sbtn.parentElement.parentElement.id;
            const elem = sbtn.parentElement.parentElement
            const task = elem.querySelector(".editable-task");
            editTodo(id, task.value);
            task.setAttribute("readonly", "");
            
            swapWithSibiling(sbtn, "edit-btn");
        })
    })
}