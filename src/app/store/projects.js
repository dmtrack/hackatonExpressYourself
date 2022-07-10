import { createSlice } from "@reduxjs/toolkit";
import projectsService from "../services/projects.service";
import isOutDated from "../utils/isOutDated";
import { element } from "prop-types";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        projectsRequested: (state) => {
            state.isLoading = true;
        },
        projectsReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        projectsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: projectsReducer, actions } = projectsSlice;
const { projectsRequested, projectsReceived, projectsRequestFailed } = actions;

export const loadProjectsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().projects;
    if (isOutDated(lastFetch)) {
        dispatch(projectsRequested());
        try {
            const { content } = await projectsService.fetchAll();
            dispatch(projectsReceived(content));
        } catch (error) {
            dispatch(projectsRequestFailed(error.message));
        }
    }
};

export const getProjects = () => (state) => state.projects.entities;
export const getProjectsLoadingStatus = () => (state) =>
    state.projects.isLoading;

export const getProjectsList = (ids) => (state) => {
    if (state.projects.entities) {
        const userProjectsArray = [];
        const allProjects = state.projects.entities;
        ids.forEach((id) => {
            allProjects.forEach((project, index) => {
                if (id === project._id) {
                    userProjectsArray.push({
                        index: index,
                        _id: project._id,
                        description: project.default,
                        path: project.path,
                        stack: project.stack,
                        title: project.title,
                        image: project.image
                    });
                }
            });
        });
        return userProjectsArray;
    }
};
export const getProjectsList = () => (state) => {
    if (state.projects.entities) {
        return state.projects.entities;
    }
};

export default projectsReducer;
