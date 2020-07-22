import axios from "axios";

let url = "https://qc-covid19.herokuapp.com"



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


export const fetchDate =  () => {
    const day = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const date = `${day}/${month + 1}/${year}`
    return date
}


