import { createSlice } from "@reduxjs/toolkit";
import stackService from "../services/stack.service";
import isOutDated from "../utils/isOutDated";

const stackSlice = createSlice({
    name: "stack",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        stackRequested: (state) => {
            state.isLoading = true;
        },
        stackReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        stackRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: stackReducer, actions } = stackSlice;
const { stackRequested, stackReceived, stackRequestFailed } =
    actions;

export const loadStackList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().stack;
    if (isOutDated(lastFetch)) {
        dispatch(stackRequested());
        try {
            const { content } = await stackService.fetchAll();
            dispatch(stackReceived(content));
        } catch (error) {
            dispatch(stackRequestFailed(error.message));
        }
    }
};

export const getStack = () => (state) => state.stack.entities;
export const getStackLoadingStatus = () => (state) =>
    state.stack.isLoading;
export const getProfessionById = (id) => (state) => {
    if (state.stack.entities) {
        return state.stack.entities.find((p) => p._id === id);
    }
};

export default stackReducer;
