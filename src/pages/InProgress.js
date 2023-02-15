import {React, useEffect} from "react";
import { Link } from "react-router-dom";
import video from '../assets/video/alien.mp4';
import * as faceapi from 'face-api.js';



function InProgress() {


         
    useEffect(() => {
        const video = document.querySelector('#webcam');
        video.style.display="none"
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
            faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
            faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
            faceapi.nets.faceExpressionNet.loadFromUri('/models')
        ]).then(
            StartVideo(video)
        )
    }, [])

 


    const StartVideo = (video) => {
        navigator.getUserMedia(
            { video : {}},
            stream => video.srcObject = stream,
            error => console.error(error)
        )
    }

    

    const HandlePlay = () => {
        const video = document.querySelector('video');
        const canvas = faceapi.createCanvasFromMedia(video)
        const videoWrapper = document.querySelector('.video-wrapper');
        videoWrapper.append(canvas)
        const displaySize = { width : video.width, height : video.height}
        faceapi.matchDimensions(canvas, displaySize)
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks().withFaceExpressions()
            console.log(detections)
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height)
            faceapi.draw.drawDetections(canvas, resizedDetections)
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
            faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
        }, 100)
    }



    return (
        <main class="site-content">
        <div class="intro">
            <h1>Extrait : Alien, le huitième passager</h1>
            <div class="text-center">
                <div class="video-wrapper">
                    <div class="emoticon-wrapper">
                        &#128512;
                    </div>
                    <video id="webcam" autoPlay muted width='320' height='240'>
                        <source src="assets/video/sample-webcam.mp4" type="video/mp4" />
                    </video>
                    <video autoPlay controls width='320' height='240' onPlay={HandlePlay}>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
            <p class="text-center">
                <Link to="/end" class="btn">Suite du parcours</Link>
            </p>
        </div>
    </main>
    )
}

export default InProgress;