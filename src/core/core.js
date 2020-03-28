export function error(code, ptr, file_index, begin, end) {
    console.error("Runtime error: " + code);
    throw "runtime-error";
}