
const axios = require("axios")
const csvParse = require('csv-parse/lib/sync')


const cas_confirmes_url = "https://cdn-contenu.quebec.ca/cdn-contenu/sante/documents/Problemes_de_sante/covid-19/csv/cas-region.csv"
const cas_deces_url = "https://cdn-contenu.quebec.ca/cdn-contenu/sante/documents/Problemes_de_sante/covid-19/csv/deces-region.csv"

let data = {}
const getDate = async(dt) => {
    const regex = /\d+\s\w+(?=,)/
    const found = dt[1].match(regex)
    data.date = `${found[0]} 2020`
}



const getRegions = async (d) => {
    let regions = []
    const parsed = await csvParse(d, {
        delimiter: ";",
        trim: true
    })
    let regionData = parsed
    getDate(regionData.slice(0)[0])

    let namesOnly = regionData.map(i => i[0] = i[0].split(/\d+\s-\s/))
    for (let i = 1; i < namesOnly.length; i++) {
        regions.push(namesOnly[i][0] || namesOnly[i][1])
    }
    data.regions = regions
}


const getNumbers = async (csvData, arr) => {
    const parsed = await csvParse(csvData, {
        delimiter: ";",
        trim: true
    })
    let numsData = parsed.slice(1, -1)
    for (let i = 0; i < numsData.length; i++) {
        arr.push(parseInt(numsData[i][1].replace(/\s/g, "")))
    }

}


const getConfirmes = (url) => {
    let confirmes = []
    axios.get(url).then((res) => {
        getNumbers(res.data, confirmes)
    }).catch((err) => console.log(err))

    data.confirmes = confirmes
}

const getDeces = (url) => {
    let deces = []
    axios.get(url).then((res) => {
        getNumbers(res.data, deces)
    }).catch((err) => console.log(err))

    data.deces = deces
}


const getRegionsNames = () => {
    axios.get(cas_confirmes_url).then(res => {
        getRegions(res.data)
    }).catch(err => {
        throw err
    })
    
}


Promise.all([
    getRegionsNames(),
    getConfirmes(cas_confirmes_url),
    getDeces(cas_deces_url),
])








module.exports = data


