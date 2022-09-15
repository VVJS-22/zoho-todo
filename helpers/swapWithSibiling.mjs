export const swapWithSibiling = (btn, swappable) => {
    const btnParent = btn.parentElement
    const sibiling = btnParent.querySelector(`.${swappable}`)
    btn.classList.add("hide");
    sibiling.classList.remove("hide");
}