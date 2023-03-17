import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import Movie1 from '../../Media/JPicVid/0a277fc437d547269e264e1cb095b994.MOV';
// import Movie2 from '../Media/JPicVid/0a277fc437d547269e264e1cb095b994.MOV';
// import Movie3 from '../Media/JPicVid/0a277fc437d547269e264e1cb095b994.MOV';
// import Movie4 from '../Media/JPicVid/0a277fc437d547269e264e1cb095b994.MOV';
// import Movie5 from '../Media/JPicVid/0a277fc437d547269e264e1cb095b994.MOV';
// import Movie6 from '../Media/JPicVid/0a277fc437d547269e264e1cb095b994.MOV';
// import Movie7 from '../Media/JPicVid/0a277fc437d547269e264e1cb095b994.MOV';
// import Movie8 from '../Media/JPicVid/0a277fc437d547269e264e1cb095b994.MOV';
// import Movie9 from '../Media/JPicVid/0a277fc437d547269e264e1cb095b994.MOV';
// import JDrive from '../Media/JPicVid/BWJumper.jpg';
import VideoPlaceholder from '../Media/video-placeholder.png';


const VideoSection = () => {
 
    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3, itemsFit: 'contain' },
    };

    let videoObj= [
        {src: 'JPicVid/vid1.MP4', title:'Video 1', type:'video/mp4'},
        {src: 'JPicVid/vid2.MP4', title:'Video 2', type:'video/mp4'},
        {src: 'JPicVid/vid3.MP4', title:'Video 3', type:'video/mp4'},
        {src: 'JPicVid/vid4.MP4', title:'Video 4', type:'video/mp4'},
        {src: 'JPicVid/vid5.MP4', title:'Video 5', type:'video/mp4'},
        {src: 'JPicVid/vid6.MP4', title:'Video 6', type:'video/mp4'},
        {src: 'JPicVid/vid7.MP4', title:'Video 7', type:'video/mp4'},
        {src: 'JPicVid/vid8.MP4', title:'Video 8', type:'video/mp4'},
        {src: 'JPicVid/vid9.MP4', title:'Video 9', type:'video/mp4'},
        {src: 'JPicVid/vid10.MP4', title:'Video 10', type:'video/mp4'},
        {src: 'JPicVid/vid11.MP4', title:'Video 11', type:'video/mp4'},
        {src: 'JPicVid/vid12.MP4', title:'Video 12', type:'video/mp4'},
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
            <div  className='m-5 container'>
                <AliceCarousel mouseTracking items={videos} responsive={responsive}  onDragStart={handleDragStart}/>
            </div>
        </div>
    )
}

export default VideoSection