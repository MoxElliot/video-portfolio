import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import VideoPlaceholder from '../Images/video-placeholder.png';

const VideoSection = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='video-section' id='video-section'>
            <h1>Video Section</h1>
            <Carousel activeIndex={index} onSelect={handleSelect} variant='dark' className='p-5'>
                <Carousel.Item>
                    <Stack
                        direction="horizontal"
                        className="h-100 d-flex justify-content-around"
                        gap={3}>
                        <Card className=''>
                            <Image
                                className='d-block w-100'
                                src={VideoPlaceholder}
                                alt='First Video First Set'
                            />
                            <h5>Video 1/1</h5>
                        </Card>
                        <Card className=''>
                            <img
                                className='d-block w-100'
                                src={VideoPlaceholder}
                                alt='Second Video First Set'
                            />
                            <h5>Video 2/1</h5>
                        </Card>
                        <Card className=''>
                            <img
                                className='d-block w-100'
                                src={VideoPlaceholder}
                                alt='Third Video First Set'
                            />
                            <h5>Video 3/1</h5>
                        </Card>
                    </Stack>
                    {/* <Carousel.Caption>
                        <h3>First Set of Slides</h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <Stack
                        direction="horizontal"
                        className="h-100 d-flex justify-content-around"
                        gap={3}>
                        <Card>
                            <Image
                                className='d-block w-100'
                                src={VideoPlaceholder}
                                alt='First Video First Set'
                            />
                            <h5>Video 1/2</h5>
                        </Card>
                        <Card>
                            <img
                                className='d-block w-100'
                                src={VideoPlaceholder}
                                alt='Second Video First Set'
                            />
                            <h5>Video 2/2</h5>
                        </Card>
                        <Card>
                            <img
                                className='d-block w-100'
                                src={VideoPlaceholder}
                                alt='Third Video First Set'
                            />
                            <h5>Video 3/2</h5>
                        </Card>
                    </Stack>
                    {/* <Carousel.Caption>
                        <h3>First Set of Slides</h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <Stack
                        direction="horizontal"
                        className="h-100 d-flex justify-content-around"
                        gap={3}>
                        <Card>
                            <Image
                                className='d-block w-100'
                                src={VideoPlaceholder}
                                alt='First Video First Set'
                            />
                            <h5>Video 1/3</h5>
                        </Card>
                        <Card>
                            <img
                                className='d-block w-100'
                                src={VideoPlaceholder}
                                alt='Second Video First Set'
                            />
                            <h5>Video 2/3</h5>
                        </Card>
                        <Card>
                            <img
                                className='d-block w-100'
                                src={VideoPlaceholder}
                                alt='Third Video First Set'
                            />
                            <h5>Video 3/3</h5>
                        </Card>
                    </Stack>
                    {/* <Carousel.Caption>
                        <h3>First Set of Slides</h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default VideoSection