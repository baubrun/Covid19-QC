import axios from "axios";

let url = ""



export const getRegionNames = async () => {
    const newUrl =  url + "/regions" ;
    const regions = await axios.get(newUrl);
    return regions.data
}


export const fetchDataApi = async (id) => {
    const newUrl =  url + "/" + id;
    const data = await axios.get(newUrl);
    return data.data
}


export const fetchDate = async () => {
    const newUrl =  url + "/date" ;
    const date = await axios.get(newUrl);
    return date.data
}


