const express= require('express')

const app = express()


const pug = require("pug");
const workingHours = require("./middelware/workingHours");

app.use(express.static("public"))
app.set("view engine", "pug");
app.set("views", "views");

app.get("/", workingHours ,  function (req, res) {
    res.render("index" , {
      title :  "Home Page"
    });
  });

app.get('/aboutUs', workingHours,function(req,res){
res.render("aboutUs",{
  title:"aboutUs"
})
})
app.get('/contactUs', workingHours,function(req,res){
  res.render("contactUs",{
    title:"contactUs"
  })
  })

  app.get('/*',function(req,res){
    res.render("error",{
      title:"error"
    })
    })



const PORT = 2022 ; 

app.listen(PORT , error => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("server is working" )
    }
})