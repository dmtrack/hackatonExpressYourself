import httpService from "./http.service";
const socialEndpoint = "social/";

const socialService = {
    fetchAll: async () => {
        const { data } = await httpService.get(socialEndpoint);
        return data;
    }
};
export default socialService;
