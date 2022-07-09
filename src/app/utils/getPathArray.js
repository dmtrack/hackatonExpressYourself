export function getPathArray(path) {
    const arr = path.split("/");
    arr[0] = "Main";
    return arr;
}
