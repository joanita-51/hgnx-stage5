require('dotenv').config(); // Load environment variables from .env file
const express = require("express")
const app = express();
const path = require('path')
const multer = require('multer');
const cors = require('cors'); // Require the cors package
const { Deepgram } = require("@deepgram/sdk");
const fs = require("fs");
const port = 3000;


// Configure CORS
app.use(cors());

const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);

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
        if(!file.originalname.match(/\.(mp4|MPEG-4|mkv|webm)$/)){
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
        // Get the file path and MIME type from the req.file object
        const filePath = req.file.path;
        const MIMETYPE_OF_FILE = req.file.mimetype;
        const videoFileName = req.file.filename
        const videoUrl = `/videos/${videoFileName}`
        // Sending a ReadStream
        const audioSource = {
            stream: fs.createReadStream(filePath),
            mimetype: MIMETYPE_OF_FILE,
        };
        async function submitAsyncRequest() {
            try {
                const response = await deepgram.transcription.preRecorded(audioSource, {
                    punctuate: true,
                    // other options are available
                });
            // Check if the response contains transcription results
            if (response && response.results && response.results.channels && response.results.channels.length > 0) {
                const transcriptionText = response.results.channels[0].alternatives[0].transcript;
                // console.log('Transcription:', transcriptionText);
                res.status(200).send({videoUrl, transcriptionText})
            } else {
                res.status(200).send({videoUrl, transcriptionText:"No transcription text found"})
            }              
            } catch (error) {
                // Handle the Deepgram API error
                console.error('Deepgram API Error:', error);  
                res.status(400).send({error: error.message}) 
            }

        }
        await submitAsyncRequest()

    } catch (error) {
        res.status(400).send({error: error.message})
    }

})
app.get('/',(req,res)=>{
    res.send("hello there")
})
app.listen(port,()=>console.log(`server listening to ${port}`))
