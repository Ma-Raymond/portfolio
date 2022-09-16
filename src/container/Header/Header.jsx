import React from 'react';
import {motion} from 'framer-motion';
import { images } from '../../constants'
import {AppWrap} from '../../wrapper';

import './Header.scss';

const scaleVariants = {
  whileInView: {

    scale: [0,1],
    opacity: [0,1],
    transistion: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{duration: 1, type:'tween'}}
      variants={{
        visible: { opacity: 1, x: 0},
        hidden: { opacity: 0, x: -100}
      }}
      
      className='app__header-info'
      >
        <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{marginLeft: 5}}>
                <p className='p-text'> Hello, I am</p>
                <h2 className='head-text'>Raymond Ma</h2>
              </div>
            </div>
            <div className='tag-cmp app_flex'>
                <p className='p-text'>Seeking 2023 Summer Internships</p>
                <p className='head-text'></p>
            </div>
            <div className='tag-cmp app_flex'>
                <p className='p-text'>I'm a Software Engineering student at McMaster University passionate 
          about software development and excited to learn new technologies and hopes build
            impactful solutions!</p>
                <p className='head-text'></p>
            </div>

            

        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{duration: 1, type:'tween'}}
        variants={{
          visible: { opacity: 1, x: 0},
          hidden: { opacity: 0, x: -100}
        }}
        className='app__header-img'
      >
        <img src={images.profilepicture} alt='profile_bg' className='profile_pic'/>
        <motion.img
        whileInView={{ scale: [0,1]}}
        transistion={{ duration: 1, ease: 'easeInOut'}}
        src={images.circle}
        alt='profile_circle'
        className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView= {scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.azure, images.python, images.react].map((circle, index)=> (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle'/>
          </div>
        ))}
      </motion.div>

          
    </div>
  )
}

export default AppWrap(Header,'home')