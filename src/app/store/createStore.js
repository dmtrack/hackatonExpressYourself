import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import projectsReducer from "./projects";
import rolesReducer from "./roles";
import socialReducer from "./social";
import stackReducer from "./stack";

const rootReducer = combineReducers({
    users: usersReducer,
    projects: projectsReducer,
    roles: rolesReducer,
    social: socialReducer,
    stack: stackReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
