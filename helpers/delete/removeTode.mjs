import { NoTasks } from "../../components/NoTasks.mjs";
import { deleteTodo } from "../../api/api.mjs";
import { removeElement } from "../removeElement.mjs";

export const removeTodo = (elements, type) => {
    elements.forEach(btn => {
        btn.addEventListener("click", () => {
            const element = btn.parentElement.parentElement;
            const id = element.id;
            deleteTodo(id)
            removeElement(element);
        })
    })
    
}
