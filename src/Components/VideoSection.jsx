import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const VideoSection = () => {
 
    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3, itemsFit: 'contain' },
    };

    let videoObj= [
        {src: 'https://d3ee098cruiy0.cloudfront.net/vid1.MP4', title:'Video 1', type:'video/mp4'},
        {src: 'https://d3ee098cruiy0.cloudfront.net/vid2.MP4', title:'Video 2', type:'video/mp4'},
        {src: 'https://d3ee098cruiy0.cloudfront.net/vid3.MP4', title:'Video 3', type:'video/mp4'},
        {src: 'https://d3ee098cruiy0.cloudfront.net/vid4.MP4', title:'Video 4', type:'video/mp4'},
        {src: 'https://d3ee098cruiy0.cloudfront.net/vid5.MP4', title:'Video 5', type:'video/mp4'},
        {src: 'https://d3ee098cruiy0.cloudfront.net/vid6.MP4', title:'Video 6', type:'video/mp4'},
        {src: 'https://d3ee098cruiy0.cloudfront.net/vid7.MP4', title:'Video 7', type:'video/mp4'},
        {src: 'https://d3ee098cruiy0.cloudfront.net/vid8.MP4', title:'Video 8', type:'video/mp4'},
        {src: 'https://d3ee098cruiy0.cloudfront.net/vid9.MP4', title:'Video 9', type:'video/mp4'},
        {src: 'https://d3ee098cruiy0.cloudfront.net/vid10.MP4', title:'Video 10', type:'video/mp4'},
        {src: 'https://d3ee098cruiy0.cloudfront.net/vid11.MP4', title:'Video 11', type:'video/mp4'},
        {src: 'https://d3ee098cruiy0.cloudfront.net/vid12.MP4', title:'Video 12', type:'video/mp4'},
    ]

    let videos = videoObj.map((video) => {
        return (
                <div className='d-flex flex-column justify-content-center'>
                    <video className='m-3' controls width={300} height={300}>
                        <source src={video.src} type={video.type}  />
                    </video>
                </div>
                )
    });

    return (
        <div className='video-section' id='video-section'>
            <h1>Video Section</h1>
            <div  className='container'>
                <AliceCarousel mouseTracking items={videos} responsive={responsive}  onDragStart={handleDragStart}/>
            </div>
        </div>
    )
}

export default VideoSection