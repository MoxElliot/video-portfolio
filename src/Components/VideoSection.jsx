import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import VideoPlaceholder from '../Images/video-placeholder.png';


const VideoSection = () => {
 
    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3, itemsFit: 'contain' },
    };

    let videoObj= [
        {src: VideoPlaceholder, title:"Video 1"},
        {src: VideoPlaceholder, title:"Video 2"},
        {src: VideoPlaceholder, title:"Video 3"},
        {src: VideoPlaceholder, title:"Video 4"},
        {src: VideoPlaceholder, title:"Video 5"},
        {src: VideoPlaceholder, title:"Video 6"},
        {src: VideoPlaceholder, title:"Video 7"},
        {src: VideoPlaceholder, title:"Video 8"},
    ]

    let videos = videoObj.map((video) => {
        return (
                <div className='d-flex flex-row justify-content-center'>
                    <img src={video.src} title={video.title} allowfullscreen autoPlayControls='true'/>
                </div>
                )
    });

    return (
        <div className='video-section' id='video-section'>
            <h1>Video Section</h1>
            <div  className='m-5 container'>
                <AliceCarousel mouseTracking items={videos} responsive={responsive}  onDragStart={handleDragStart}/>
            </div>
        </div>
    )
}

export default VideoSection