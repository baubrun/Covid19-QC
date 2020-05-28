import axios from "axios";

let url = "http://localhost:5000/covid19qc/api"


export const getData = async () => {
    const response = await axios.get(url);
    return response.data.c19qc
}
export default getData


export const getRegionData = async (region) => {
    const newUrl =  url + "/" + region;

    const response = await axios
    .get(newUrl);
    return response.data.c19qc
}


