import httpService from "./http.service";
const stackEndpoint = "stack/";

const stackService = {
    fetchAll: async () => {
        const { data } = await httpService.get(stackEndpoint);
        return data;
    }
};
export default stackService;
