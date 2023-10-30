const express = require("express")
const app = express();
const http = require("http").createServer(app);

const jsonData = require("./csvjson.json");

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
        list = [...list,{id:index,name: jsonData[index].Character, url:`https://waifuserv.onrender.com/waifu/${index}`}]
    }
    res.send(list);
})
app.get("/waifu/:index",(req,res)=>{
    let index = req.params.index;
    res.sendFile(__dirname +`/${jsonData[index].Image_URL}`)
})

const port = process.env.PORT || 5500;
http.listen(port,()=>{console.log(`[server]: running on ${port}`)})


