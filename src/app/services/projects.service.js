import httpService from "./http.service";
const projectsEndpoint = "projects/";

const projectsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(projectsEndpoint);
        return data;
    }
};
export default projectsService;
