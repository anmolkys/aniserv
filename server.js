const express = require("express")
const app = express();
const http = require("http").createServer(app);

const jsonData = require("./csvjson.json");
console.log(jsonData.length);

app.get("/random",(req,res)=>{
    let index = Math.floor(Math.random()*(jsonData.length+1));
    console.log(index);
    res.send({id:index,name: jsonData[index].Character,url:__dirname +`/${jsonData[index].Image_URL}`})
})
app.get("/:id",(req,res)=>{
    function randomImage(){
        let index = Math.floor(Math.random()*5156);
        return index
    }
    let id = req.params.id
    let list = [];
    for(let i = 0; i<id ; i++){
        let index = randomImage();
        list = [...list,{id:index,name: jsonData[index].Character,url:__dirname +`/${jsonData[index].Image_URL}`}]
    }
    res.send(list);
})


const port = process.env.PORT || 5500;
http.listen(port,()=>{console.log(`[server]: running on ${port}`)})


