import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// Do this https://maxmarinich.github.io/react-alice-carousel/#custom-components
const VideoSection = () => {
 
    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3, itemsFit: 'contain' },
    };

    let videoObj= [
        {src: 'https://portfolio-media-hosting.s3.us-west-1.amazonaws.com/vid1.mp4', title:'Video 1', type:'video/mp4'},
        {src: 'https://portfolio-media-hosting.s3.us-west-1.amazonaws.com/vid2.mp4', title:'Video 2', type:'video/mp4'},
        {src: 'https://portfolio-media-hosting.s3.us-west-1.amazonaws.com/vid3.mp4', title:'Video 3', type:'video/mp4'},
        {src: 'https://portfolio-media-hosting.s3.us-west-1.amazonaws.com/vid4.mp4', title:'Video 4', type:'video/mp4'},
        {src: 'https://portfolio-media-hosting.s3.us-west-1.amazonaws.com/vid5.MP4', title:'Video 5', type:'video/mp4'},
        {src: 'https://portfolio-media-hosting.s3.us-west-1.amazonaws.com/vid6.MP4', title:'Video 6', type:'video/mp4'},
        {src: 'https://portfolio-media-hosting.s3.us-west-1.amazonaws.com/vid7.mp4', title:'Video 7', type:'video/mp4'},
        {src: 'https://portfolio-media-hosting.s3.us-west-1.amazonaws.com/vid8.mp4', title:'Video 8', type:'video/mp4'},
        {src: 'https://portfolio-media-hosting.s3.us-west-1.amazonaws.com/vid9.mp4', title:'Video 9', type:'video/mp4'},
        {src: 'https://portfolio-media-hosting.s3.us-west-1.amazonaws.com/vid10.mp4', title:'Video 10', type:'video/mp4'},
        {src: 'https://portfolio-media-hosting.s3.us-west-1.amazonaws.com/vid11.mp4', title:'Video 11', type:'video/mp4'},
        {src: 'https://portfolio-media-hosting.s3.us-west-1.amazonaws.com/vid12.MP4', title:'Video 12', type:'video/mp4'},
    ]

    let videos = videoObj.map((video) => {
        return (
                <div className='d-flex flex-column justify-content-center'>
                    <video className='m-3' controls width={250} height={250}>
                        <source src={video.src} type={video.type}  />
                    </video>
                </div>
                )
    });

    return (
        <div className='video-section container mt-5 p-0' id='video-section'>
            <div 
                className='section-divider' 
                style={{height:'10rem'}}
            />
            <h1>Videos</h1>
            <AliceCarousel mouseTracking items={videos} responsive={responsive}  onDragStart={handleDragStart} role='presentation'/>
        </div>
    )
}

export default VideoSection