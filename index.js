const express = require("express")
const app = express();
const path = require('path')
const multer = require('multer');
const cors = require('cors'); // Require the cors package
const port = 3000;


// Configure CORS
app.use(cors());

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
app.use('/videos', express.static('videos'))
app.post('/upload', videoUpload.single('video'), async(req,res)=>{
    try {
        if(!req.file){
            return res.status(400).send({error: 'No video file uploaded'})
        }
        const videoFileName = req.file.filename
        const videoUrl = `/videos/${videoFileName}`
        res.status(200).send({videoUrl})

    } catch (error) {
        res.status(400).send({error: error.message})
    }

})
app.get('/',(req,res)=>{
    res.send("hello there")
})
app.listen(port,()=>console.log(`server listening to ${port}`))
