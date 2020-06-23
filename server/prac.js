let s = "1 806"

console.log(parseInt(s.replace(/\s/g, "")))

const express = require("express")
const app = express()
const cors = require("cors")
const data = require("./data")

app.use(express.json())
app.use(cors())




const getTotal = (d) => {
    const reducer = (acc, val) => acc + val
    const ans = d.reduce(reducer)
    return ans
}


const allData = () => {
    const conf = data.confirmes
    const dec = data.deces

    let d = {}
    for (let i = 0; i < data.regions.length; i++) {
        d[`${data.regions[i]}`] = {
            confirmes : conf[i],
            deces: dec[i]
        }
    }
    d.Total = {confirmes: getTotal(conf), deces: getTotal(dec)} 
    return d
}




app.get("/regions", (req, res) => {
    res.send(data.regions)
})


app.get("/data", (req, res) => {
    const conf = data.confirmes
    const dec = data.deces
    const copyData = data
    copyData.confirmes.push(getTotal(conf))
    copyData.deces.push(getTotal(dec))
    res.send(copyData)
})


app.get("/confirmes", (req, res) => {
    const conf = data.confirmes
    conf.push(getTotal(conf))
    res.send(conf)
})


app.get("/deces", (req, res) => {
    const dec = data.deces
    dec.push(getTotal(dec))
    res.send(dec)
})

app.get("/all", (req, res) => {
    res.send(allData())
})









const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("\nServer running on port:", port)
})