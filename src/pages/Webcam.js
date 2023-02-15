import React, { useState } from "react";
import { useEffect } from "react";
import * as faceapi from 'face-api.js';
import { Link } from "react-router-dom";



function Webcam() {


    const [currentEmotion, setCurrentEmotion] = useState('');


    const emotions = {
        angry : '😡',
        disgusted : '🤮',
        fearful : '😨',
        happy : '🤣',
        neutral : '😐',
        sad : '😪',
        surprised : '😧'
    }
       


    useEffect(() => {
        const video = document.querySelector('video');
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
            detections?.map((element) => {
                let current = ''
                let currentValue = 0
                for(const [key, value] of Object.entries(element.expressions)) {
                    if(value > currentValue) {
                        current = key;
                        currentValue = value;
                    }
                }
                setCurrentEmotion(current);
            })
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height)
            faceapi.draw.drawDetections(canvas, resizedDetections)
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
            faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
        }, 100)
    }
   

    return (
        <main className="site-content">
        <h1>Ajustement de la webcam</h1>
        <p>Placez-vous devant l'ordinateur de façon à ce que la webcam puisse voir tout votre visage. Vous allez
            constater que l'Ai peut déjà lire vos expressions.</p>
        <div className="text-center">
            <div className="video-wrapper">
                <div className="emoticon-wrapper">
                    {emotions[currentEmotion]};
                </div>
                <video autoPlay muted width='320' height='240' onPlay={HandlePlay}>
                    <source src="assets/video/sample-webcam.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <p className="text-center">
            <Link to="/inProgress" className="btn">Suite du parcours</Link>
        </p>
    </main>
    )
}

export default Webcam;