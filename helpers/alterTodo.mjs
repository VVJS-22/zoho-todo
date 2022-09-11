export const alterTodo = (elements) => {
    elements.forEach(btn => {
        btn.addEventListener("click", () => {
            const elem = btn.parentElement.parentElement
            const task = elem.querySelector(".editable-task")
            task.removeAttribute("readonly")
            const end = task.value.length;
            task.setSelectionRange(end, end);
            task.focus()

            const btnParent = btn.parentElement
            const saveBtn = btnParent.querySelector(".save-btn")
            btn.classList.add("hide");
            saveBtn.classList.remove("hide");
        })
    })
}