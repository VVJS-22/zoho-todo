export const CompletedTask = ({id, task}) => {
    return (`
    <div id=${id} class="task-wrapper task-shadow">
        <div class="task">
            <span class="tick completed">
                <p>✓</p></span>
            <input class="task-completed editable-task" type="text" name="task" value="${task}" readonly>
        </div>
        <div class="task-buttons">
            <img class="btn delete-btn" title="Delete" src="/assets/delete.svg" alt="delete">
        </div>
    </div>
    `)
}