import { NoTasks } from "../components/NoTasks.mjs";
import { toggleTodo } from "../api/api.mjs";

export const changeActive = (elements, type) => {
    elements.forEach(item => {
        item.addEventListener("click", () => {
            const element = item.parentElement.parentElement;
            const parent = element.parentElement;
            const id = element.id;
            toggleTodo(id);
            element.remove();
            const children = Array.from(parent.childNodes).filter(child => child.nodeName !== "#text")
            if(!children.length) {
                parent.innerHTML = type ? NoTasks("active") : NoTasks("completed");
            }
        })
    })
}