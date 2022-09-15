import { NoTasks } from "../../components/NoTasks.mjs";
import { toggleTodo } from "../../api/api.mjs";
import { removeElement } from "../removeElement.mjs";

export const changeActive = (elements, type) => {
    elements.forEach(item => {
        item.addEventListener("click", () => {
            const element = item.parentElement.parentElement;
            const id = element.id;
            toggleTodo(id);
            removeElement(element, type);
        })
    })
}