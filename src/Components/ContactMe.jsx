import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {AiOutlineMail, AiOutlineInstagram, AiFillTwitterCircle} from 'react-icons/ai';
import {FaYoutube} from 'react-icons/fa';

const ContactMe = () => {
    return (
        <div className='contact-me container p-0' id='contact-me'>
            <div 
                className='section-divider' 
                style={{height:'10rem'}}
            />
            <ButtonGroup aria-label="Social Contacts" className='contact-card d-flex flex-row p-2'>
                <a href='mailto:jacobdoffing@gmail.com' className='w-25 h-25'>
                    <AiOutlineMail className='social-link w-75 h-100'/>
                </a>
                <a href='https://www.instagram.com/jacobdoffing/' className='w-25 h-25'>
                    <AiOutlineInstagram className='social-link w-75 h-75'/>
                </a>
                <a href='https://twitter.com/jcd1724' className='w-25 h-25'>
                    <AiFillTwitterCircle className='social-link w-75 h-75'/>
                </a>
                <a href='https://www.youtube.com/watch?v=QwJQGzvBa74' className='w-25 h-25'>
                    <FaYoutube className='social-link w-75 h-75' />
                </a>
            </ButtonGroup>
        </div>
    )
}

export default ContactMe