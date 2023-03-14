import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import VideoPlaceholder from '../Images/video-placeholder.png';


const VideoSection = () => {
    const [index, setIndex] = useState(0);
    const [ innerWidth, setInnerWidth ] = useState(window.innerWidth)
    const [ videoDirection, setVideoDirection ] = useState('vertical')

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
  
    useEffect(() => {
        function checkResize() {
            setInnerWidth(window.innerWidth);
        }
        window.addEventListener('resize', checkResize)
        checkResize();
        switch(innerWidth > 600) {
            case false:
                setVideoDirection('vertical');
                break;
            
            case true:
                setVideoDirection('horizontal');
                break;
        }
        return () => window.removeEventListener('resize', checkResize);
    }, [innerWidth]);

    return (
        <div className='video-section' id='video-section'>
            <h1>Video Section</h1>
            <Carousel activeIndex={index} onSelect={handleSelect} variant='dark' controls='true' interval={null} wrap='true' className='p-5'>
                <Carousel.Item className=''>
                    <Stack
                        direction={videoDirection}
                        className="d-flex justify-content-around"
                        >
                        <Card className=''>
                            <Image
                                src={VideoPlaceholder}
                                alt='First Video First Set'
                            />
                            <h5>Video 1/1</h5>
                        </Card>
                        <Card className=''>
                            <img
                                src={VideoPlaceholder}
                                alt='Second Video First Set'
                            />
                            <h5>Video 2/1</h5>
                        </Card>
                        <Card className=''>
                            <img
                                src={VideoPlaceholder}
                                alt='Third Video First Set'
                            />
                            <h5>Video 3/1</h5>
                        </Card>
                    </Stack>
                </Carousel.Item>
                <Carousel.Item>
                    <Stack
                        direction={videoDirection}
                        className="d-flex justify-content-around"
                        >
                        <Card>
                            <Image
                                src={VideoPlaceholder}
                                alt='First Video First Set'
                            />
                            <h5>Video 1/2</h5>
                        </Card>
                        <Card>
                            <Image
                                src={VideoPlaceholder}
                                alt='Second Video First Set'
                            />
                            <h5>Video 2/2</h5>
                        </Card>
                        <Card>
                            <img
                                src={VideoPlaceholder}
                                alt='Third Video First Set'
                            />
                            <h5>Video 3/2</h5>
                        </Card>
                    </Stack>
                </Carousel.Item>
                <Carousel.Item>
                    <Stack
                        direction={videoDirection}
                        className="d-flex justify-content-around"
                        >
                        <Card>
                            <Image
                                src={VideoPlaceholder}
                                alt='First Video First Set'
                            />
                            <h5>Video 1/3</h5>
                        </Card>
                        <Card>
                            <img
                                src={VideoPlaceholder}
                                alt='Second Video First Set'
                            />
                            <h5>Video 2/3</h5>
                        </Card>
                        <Card>
                            <img
                                src={VideoPlaceholder}
                                alt='Third Video First Set'
                            />
                            <h5>Video 3/3</h5>
                        </Card>
                    </Stack>
            
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default VideoSection