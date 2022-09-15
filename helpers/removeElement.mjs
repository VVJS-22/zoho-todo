import { NoTasks } from "../components/NoTasks.mjs";

export const removeElement = (element, type) => {
    const parent = element.parentElement;
    element.remove();
    const children = Array.from(parent.childNodes).filter(item => item.nodeName !== "#text")
    if(!children.length) {
        parent.innerHTML = type ? NoTasks("active") : NoTasks("completed");
    }
}