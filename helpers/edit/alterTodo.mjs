import { swapWithSibiling } from "../swapWithSibiling.mjs"

export const alterTodo = (elements) => {
    elements.forEach(btn => {
        btn.addEventListener("click", () => {
            const elem = btn.parentElement.parentElement
            const task = elem.querySelector(".editable-task")
            task.removeAttribute("readonly")
            const end = task.value.length;
            task.setSelectionRange(end, end);
            task.focus()

            swapWithSibiling(btn, "save-btn");
        })
    })
}