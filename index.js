var express = require('express')
var app = express()

const rootcall=(req,res)=>{

    res.send("rhnaks")
}

app.get("/",rootcall)


app.listen(3000,()=>console.log("lisig 3000"))