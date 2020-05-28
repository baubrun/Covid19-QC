import axios from "axios";

let url = "http://localhost:5000/covid19qc/api"




export const getRegionNames = async () => {
    const resp = await axios.get(url);
    const regions =  resp.data.c19qc.map(d => d.région)
    return regions
}


export const fetchDataApi = async (region) => {
    const newUrl =  url + "/" + region;

    const resp = await axios.get(newUrl);
    console.log("fetchDataApi", resp.data.c19qc)
    return resp.data.c19qc
}


