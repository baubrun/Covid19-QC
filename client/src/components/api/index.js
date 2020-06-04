import axios from "axios";

let url = "https://cov19qc.herokuapp.com/api"




export const getRegionNames = async () => {
    const resp = await axios.get(url);
    const regions =  resp.data.c19qc.map(d => d.region)
    return regions
}


export const fetchDataApi = async (region) => {
    const newUrl =  url + "/" + region;

    const resp = await axios.get(newUrl);
    return resp.data.c19qc
}


