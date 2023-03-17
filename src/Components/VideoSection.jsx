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
        {src: 'JPicVid/vid1.MOV', title:"Video 1"},
        {src: 'JPicVid/vid2.MOV', title:"Video 2"},
        {src: 'JPicVid/vid3.MOV', title:"Video 3"},
        {src: 'JPicVid/vid4.MOV', title:"Video 4"},
        {src: 'JPicVid/vid5.MP4', title:"Video 5"},
        {src: 'JPicVid/vid6.MP4', title:"Video 6"},
        {src: 'JPicVid/vid7.MOV', title:"Video 7"},
        {src: 'JPicVid/vid8.MOV', title:"Video 8"},
        {src: 'JPicVid/vid9.MOV', title:"Video 9"},
        {src: 'JPicVid/vid10.MOV', title:"Video 10"},
        {src: 'JPicVid/vid11.MOV', title:"Video 11"},
        {src: 'JPicVid/vid12.MP4', title:"Video 12"},
    ]

    let videos = videoObj.map((video) => {
        return (
                <div className='d-flex flex-column justify-content-center'>
                    <img src={video.src} width={300} height={300} className='m-3' />
                    {/* <img src={video.src} className='m-3' /> */}
                    {/* <p>{video.title}</p> */}
                    {/* <img src={JDrive}/> */}
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