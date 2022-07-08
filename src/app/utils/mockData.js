import { useEffect, useState } from "react";
// import professions from "../mockData/professions.json";
// import qualities from "../mockData/qualities.json";
import users from "../mockData/users.json";
import projects from "../mockData/projects.json";
import roles from "../mockData/roles.json";
import social from "../mockData/social.json";
import stack from "../mockData/stack.json";
import httpService from "../services/http.service";

const useMockData = () => {
    const statusConsts = {
        idle: "Not Started",
        pending: "In Process",
        successed: "Ready",
        error: "Error occurred"
    };
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(statusConsts.idle);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const summaryCount =
        users.length + projects.length + roles.length +
        social.length + stack.length;
    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    };
    const updateProgress = () => {
        if (count !== 0 && status === statusConsts.idle) {
            setStatus(statusConsts.pending);
        }
        const newProgress = Math.floor((count / summaryCount) * 100);
        if (progress < newProgress) {
            setProgress(() => newProgress);
        }
        if (newProgress === 100) {
            setStatus(statusConsts.successed);
        }
    };

    useEffect(() => {
        updateProgress();
    }, [count]);
    async function initialize() {
        try {
            for (const user of users) {
                await httpService.put("user/" + user._id, user);
                incrementCount();
            }
            for (const project of projects) {
                await httpService.put("projects/" + project._id, project);
                incrementCount();
            }
            for (const role of roles) {
                await httpService.put("role/" + role._id, role);
                incrementCount();
            }
            for (const soc of social) {
                await httpService.put("social/" + soc._id, soc);
                incrementCount();
            }
            for (const stackItem of stack) {
                await httpService.put("stack/" + stackItem._id, stackItem);
                incrementCount();
            }
        } catch (error) {
            setError(error);
            setStatus(statusConsts.error);
        }
    }

    return { error, initialize, progress, status };
};

export default useMockData;
