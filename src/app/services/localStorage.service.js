const BOOKMARKS = "bookmarks";
const CURRENT_USER = "currentUser";

export function authUser(userData) {
    return localStorage.setItem(CURRENT_USER, JSON.stringify(userData));
}
export function getUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER));
}

export function fetchAllUsers() {
    return JSON.parse(localStorage.getItem(BOOKMARKS)) || [];
}

export function setUsers(data) {
    return localStorage.setItem(BOOKMARKS, JSON.stringify(data));
}

export function removeUser() {
    return localStorage.removeItem(CURRENT_USER);
}

export function removeBookmarks() {
    return localStorage.removeItem(BOOKMARKS);
}

const localStorageService = {
    authUser,
    getUser,
    removeUser,
    fetchAllUsers,
    removeBookmarks,
    setUsers
};
export default localStorageService;
