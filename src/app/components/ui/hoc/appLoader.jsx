import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../common/loader";
import { getUsersLoadingStatus } from "../../../store/users";
import { loadProjectsList } from "../../../store/projects";
import { loadRolesList } from "../../../store/roles";
import { loadSocialList } from "../../../store/social";
import { loadStackList } from "../../../store/stack";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const usersStatusLoading = useSelector(getUsersLoadingStatus());
    useEffect(() => {
        dispatch(loadStackList());
        dispatch(loadProjectsList());
        dispatch(loadRolesList());
        dispatch(loadSocialList());
        // dispatch(loadUsersList());
    }, []);
    if (usersStatusLoading) return <Loader />;
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
