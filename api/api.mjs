export const addTodo = (task) => {
    const todos = getTodos() || setTodos({})
    const id = (Object.keys(todos).length + 1).toString()
    todos[id] = {
        id,
        task,
        status: true
    }
    return setTodos(todos)
}

export const deleteTodo = (id) => {
    const todos = getTodos() || setTodos({})
    if (Object.keys(todos).length && todos[id]) {
        delete todos[id]
    }
    return setTodos(todos)
}

export const editTodo = (id, task) => {
    try {
        const todos = getTodos() || setTodos({})
        if (Object.keys(todos).length && todos[id]) {
            todos[id]["task"] = task
            return setTodos(todos)
        } 
        throw new Error(`Item with id ${id} not found!`);
    } catch (error) {
        alert(error.message)
    }
}

export const getTodos = () => {
    return JSON.parse(localStorage.getItem("todos"))
}

export const setTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
    return getTodos();
}

export const toggleTodo = (id) => {
    try {
        const todos = getTodos() || setTodos({})
        if (Object.keys(todos).length && todos[id]) {
            todos[id]["status"] = !todos[id]["status"]
            return setTodos(todos)
        } 
        throw new Error(`Item with id ${id} not found!`);
    } catch (error) {
        alert(error.message)
    }
}