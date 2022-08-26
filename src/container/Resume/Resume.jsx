import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub } from 'react-icons/ai';
import {motion} from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constants';

import './Resume.scss';

const Resume = () => {
    return (
    //     <h2 className='head-text'> 
    //     <div className='resume'>
    //         Lets work together! Here's my <span>
    //         <a href={images.resume} target='_blank' rel='noreferrer'>Resume!</a>
    //     </span>
    //     </div>
      
    //   </h2>
    <div className='copyright'>
                <p className='p-text'>@2022 Raymond Ma</p>
                <p className='p-text'>All rights reserved</p>
    </div>
    )
}

export default Resume