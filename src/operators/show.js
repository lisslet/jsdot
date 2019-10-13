export function $show() {
    return setter;
}
function setter() {
    return this.set(set);
}
function set() {
    this.style.display = 'inherit';
}
