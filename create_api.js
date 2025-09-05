const express = require ('express')
const cors = require ( 'cors')

const app = express()

app.use(cors())

app.get("/",(req,res)=>{
    res.json({name : "Ateeb",age : 21 })
})

app.get("/weather",(req,res)=>{
    res.json({wind_speed : 5.2, temperature : 34 })
})

const port = 4000
app.listen(port, () => {
  console.log(`Express API listening at http://localhost:${port}`);
});
