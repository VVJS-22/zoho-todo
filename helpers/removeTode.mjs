import { NoTasks } from "../components/NoTasks.mjs";
import { deleteTodo } from "../api/api.mjs";

export const removeTodo = (elements, type) => {
    elements.forEach(btn => {
        btn.addEventListener("click", () => {
            const element = btn.parentElement.parentElement;
            const parent = element.parentElement;
            const id = element.id;
            deleteTodo(id)
            element.remove();
            const children = Array.from(parent.childNodes).filter(item => item.nodeName !== "#text")
            if(!children.length) {
                parent.innerHTML = type ? NoTasks("active") : NoTasks("completed");
            }
        })
    })
    
}
