export const ActiveTask = ({id, task}) => {
    return (
    `<div id=${id} class="task-wrapper task-shadow">
        <div class="task">
            <span class="tick">
            <p>✓</p></span>
            <input class="editable-task" type="text" name="task" value="${task}" readonly>
        </div>
        <div class="task-buttons">
            <img class="btn edit-btn" title="Edit" src="/assets/edit.svg" alt="edit">
            <img class="btn delete-btn" title="Delete" src="/assets/delete.svg" alt="delete">
        </div>
    </div>`
    )
}