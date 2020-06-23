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
    return [d]
}


app.get("/", (req, res) => {
    res.send("server running...")
})


app.get("/regions", (req, res) => {
    res.send(data.regions)
})

app.get("/data", (req, res) => {
    res.send(allData()[0])
})

app.get("/date", (req, res) => {
    res.send(data.date)    
})

app.get("/:id", (req, res) => {
    const id = req.params.id
    res.send(allData()[0][id])

})










const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("\nServer running on port:", port)
})