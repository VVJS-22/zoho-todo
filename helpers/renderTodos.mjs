import { ActiveTask } from "../components/ActiveTask.mjs"
import { CompletedTask } from "../components/CompletedTask.mjs";
import { NoTasks } from "../components/NoTasks.mjs";

import { getTodos, setTodos } from "../api/api.mjs";

import { changeActive } from "./changeActive.mjs";
import { alterTodo } from "./alterTodo.mjs";
import { saveTodo } from "./saveTodo.mjs";
import { removeTodo } from "./removeTode.mjs";

const renderItems = (todos, type) => {
    const tasks = document.querySelector("#saved-tasks");
    
    if (Object.keys(todos).length) {
        let activesHtml = ""
        for (let item in todos) {
            if (todos[item].status === type) {
                activesHtml += type ? ActiveTask(todos[item]) : CompletedTask(todos[item]);
            }
        }
        tasks.innerHTML = activesHtml;

        const ticks = document.querySelectorAll(".tick");
        changeActive(ticks);

        const editBtns = document.querySelectorAll(".edit-btn");
        alterTodo(editBtns);

        const saveBtns = document.querySelectorAll(".save-btn");
        saveTodo(saveBtns);

        const deleteBtns = document.querySelectorAll(".delete-btn");
        removeTodo(deleteBtns);

        if (!tasks.hasChildNodes()) {
            tasks.innerHTML = NoTasks("active")
        }
    } else {
        tasks.innerHTML = NoTasks("active");
    }
}

export const renderTodos = (() => {
    if (location.pathname === "/" || location.pathname === "/index.html") {
        renderItems(getTodos() || setTodos({}), true);
    } else if (location.pathname === "/completed.html") {
        renderItems(getTodos() || setTodos({}), false);
    }
});