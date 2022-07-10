export function getPathArray(path) {
    const arr = path.split("/");
    // return arr;
    return arr.slice(1, arr.length);
}
