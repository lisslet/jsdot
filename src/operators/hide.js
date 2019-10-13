function set() {
    this.style.display = 'none';
}
function setter() {
    return this.set(set);
}
export function $hide() {
    return setter;
}
