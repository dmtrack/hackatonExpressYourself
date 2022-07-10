const BOOKMARKS = "bookmarks";
const CURRENT_USER = "currentUser";

export function authUser(userData) {
    localStorage.setItem(CURRENT_USER, JSON.stringify(userData));
}
export function getUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER));
}

export function fetchAllUsers() {
    return JSON.parse(localStorage.getItem(BOOKMARKS)) || [];
}

export function setUsers(data) {
    localStorage.setItem(BOOKMARKS, JSON.stringify(data));
}

export function removeUser() {
    localStorage.removeItem(CURRENT_USER);
}

export function removeBookmarks() {
    localStorage.removeItem(BOOKMARKS);
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
