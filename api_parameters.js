import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get("/",(req,res)=>{
    res.send("<h1>Server Running</h1>")
})

function getdata(id,password){
    if(id==1 && password == "A")
    {
      return {name : "Ateeb",age : 21}  
    }
    else if(id==2 && password == "B"){
      return {name : "Ali",age : 21}  
    }
    
    else if(id==3 && password == "C"){
      return {name : "Zain",age : 21}  
    }
    
    else if(id==4 && password == "D"){
      return {name : "Sohaib",age : 21}  
    }
    else{
      return ("User not found")
    }
  }

app.get("/user/:id/:password",(req,res)=>{
  // const id= req.params.id
  // const password = req.params.password
  // const data={name : "Ateeb",age : 21 }
  const {id,password}=req.params
  const data = getdata(id,password)  
  res.json(data)
})

const port = 4000
app.listen(port, () => {
  console.log(`Express API listening at http://localhost:${port}`);
});
