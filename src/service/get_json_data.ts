import axios, {AxiosResponse} from "axios";

const get_json_data: (url: string) => Promise<any> = async (url: string): Promise<any> => {
    const response: AxiosResponse<any> = await axios.get(url);
    return response.data;
};

export default get_json_data;