import httpService from "./http.service";
const rolesEndpoint = "role/";

const rolesService = {
    fetchAll: async () => {
        const { data } = await httpService.get(rolesEndpoint);
        return data;
    }
};
export default rolesService;
