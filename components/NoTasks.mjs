export const NoTasks = (type) => {
    return (`
    <img class="not-found" src="/assets/error.svg" alt="Not Found">
    <div class="empty-msg">No ${type} tasks found.</div>
    `)
}
