import { createSlice } from "@reduxjs/toolkit";
import socialService from "../services/social.service";
import isOutDated from "../utils/isOutDated";

const socialSlice = createSlice({
    name: "social",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        socialRequested: (state) => {
            state.isLoading = true;
        },
        socialReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        socialRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: socialReducer, actions } = socialSlice;
const { socialRequested, socialReceived, socialRequestFailed } =
    actions;

export const loadSocialList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().social;
    if (isOutDated(lastFetch)) {
        dispatch(socialRequested());
        try {
            const { content } = await socialService.fetchAll();
            dispatch(socialReceived(content));
        } catch (error) {
            dispatch(socialRequestFailed(error.message));
        }
    }
};

export const getSocial = () => (state) => state.social.entities;
export const getSocialLoadingStatus = () => (state) =>
    state.social.isLoading;
export const getSocialImageById = (id) => (state) => {
    if (state.social.entities) {
        return (state.social.entities.find((p) => p._id === id))?.image;
    }
};

export default socialReducer;
