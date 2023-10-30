const express = require("express")
const app = express();
const http = require("http").createServer(app);

const jsonData = require("./csvjson.json");

app.get("/random",(req,res)=>{
    let index = Math.floor(Math.random()*(jsonData.length+1));
    res.send({id:index,name: jsonData[index].Character,url:`https://waifuserv.onrender.com/waifu/${index}`})
})

app.get("/:id",(req,res)=>{
    let index = req.params.id;
    res.send({id:index,name: jsonData[index].Character,url:`https://waifuserv.onrender.com/waifu/${index}`})
})


app.get("/end/:id",(req,res)=>{
    let id = req.params.id
    if(id<=jsonData.length){
    function randomImage(){
        let index = Math.floor(Math.random()*5156);
        return index
    }
    let list = [];
    for(let i = 0; i<id ; i++){
        let index = randomImage();
        list = [...list,{id:index,name: jsonData[index].Character || "unnamed" , url:`https://waifuserv.onrender.com/waifu/${index}`}]
    }
    res.send(list);
    }
    else{
        res.status(404);
        res.send({id:id,name: `File limit exceeded`, url:`File limit exceeded`})
    }
})
app.get("/waifu/:index",(req,res)=>{
    let index = req.params.index;
    if(jsonData[index]){
        res.sendFile(__dirname +`/${jsonData[index].Image_URL}`)
    }
    else{
        res.status(404);
        res.send({id:index,name: `File on ${index} does not exist`, url:`File on ${index} does not exist`})
    }
    
})

const port = process.env.PORT || 5500;
http.listen(port,()=>{console.log(`[server]: running on ${port}`)})


