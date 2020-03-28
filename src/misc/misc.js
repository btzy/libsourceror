export function display(s) {
    console.info(s);
}
export function error(s) {
    console.error(s);
}
export function prompt(s) {
    return window.prompt(s);
}
export function time() {
    return new Date().getTime();
}