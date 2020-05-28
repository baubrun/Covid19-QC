const mockData = [
    {
        "confirmés": 1, 
        "date": "31 jan 2020", 
        "décès": 985, 
        "région": "Vancouver"
      } 
]


const getRegionNames = async () => {
    const response = await new Promise(resolve => {
        resolve(mockData)
    })
    return response
}


export default getRegionNames