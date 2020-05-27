import axios from "axios";


const getData = async () => {
    const response = await axios.get("http://localhost:5000/covid19qc/api");
    return response.data
}


export default getData