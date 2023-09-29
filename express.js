const express = require("express")
const app = express();
const path = require('path')
const multer = require('multer');
const port = 3000;

const videoStorage = multer.diskStorage({
    //destination to store the video
    destination: 'videos',
    filename:(req, file, cb)=>{
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})

const videoUpload = multer({
    storage:videoStorage,
    limits:{
        fileSize:10000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)){
            return cb(new Error("please upload a video"))
        }
        cb(undefined,true)
    }
})
app.post('/upload', videoUpload.single('video'), (req,res)=>{
    res.send(req.file)
},(error,req,res,next)=>{
    res.status(400).send({error: error.message})
})
app.get('/',(req,res)=>{
    res.send("hello there")
})
app.listen(port,()=>console.log(`server listening to ${port}`))
