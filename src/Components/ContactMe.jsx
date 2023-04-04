import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {AiOutlineMail, AiOutlineInstagram, AiFillTwitterCircle} from 'react-icons/ai';
import {FaTiktok} from 'react-icons/fa';

const ContactMe = () => {
    return (
        <div className='contact-me container p-0' id='contact-me'>
            <div 
                className='section-divider' 
                style={{height:'10rem'}}
            />
            <ButtonGroup aria-label="Social Contacts" className='contact-card d-flex flex-row p-2'>
                <a href='mailto:test@gmail.com' className='w-25 h-25'>
                    <AiOutlineMail className='w-75 h-100' style={{color:'blue'}}/>
                </a>
                <a href='#contact-me' className='w-25 h-25'>
                    <AiOutlineInstagram className='w-75 h-75' style={{color:'blue'}}/>
                </a>
                <a href='#contact-me' className='w-25 h-25'>
                    <AiFillTwitterCircle className='w-75 h-75' style={{color:'blue'}}/>
                </a>
                <a href='#contact-me' className='w-25 h-25'>
                    <FaTiktok className='w-75 h-75' style={{color:'blue'}}/>
                </a>
            </ButtonGroup>
        </div>
    )
}

export default ContactMe