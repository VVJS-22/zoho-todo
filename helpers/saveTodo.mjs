import { editTodo } from "../api/api.mjs";

export const saveTodo = (elements) => {
    elements.forEach(sbtn => {
        sbtn.addEventListener("click", () => {
            const id = sbtn.parentElement.parentElement.id;
            const elem = sbtn.parentElement.parentElement
            const task = elem.querySelector(".editable-task");
            editTodo(id, task.value);
            task.setAttribute("readonly", "");
            const btnParent = sbtn.parentElement
            const editBtn = btnParent.querySelector(".edit-btn");
            sbtn.classList.add("hide")
            editBtn.classList.remove("hide")
        })
    })
}