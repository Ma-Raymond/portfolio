import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';

import './About.scss';
import { images } from '../../constants';
import { urlFor , client} from '../../client';
import {AppWrap} from '../../wrapper';


const abouts = [
  { title: 'DeltaHacks Hackathon', description: 'Vice President Logistics', imgURL: images.deltahacks},
  { title: 'Roblox Corporation', description: '3D Artist/Event Organizer', imgURL: images.roblox},
  { title: 'McMaster University Engineering Faculty', description: 'Web development, Marketing, Outreach Communications', imgURL: images.mcmaster},];

const About = () => {
  const [abouts, setAbouts ] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts" ]'
    client.fetch(query)
    .then((data) => setAbouts(data))
  }, []);
  
  return (
    <>
      <h2 className='head-text'> 
      Lets work together! Here's my <span>
        <a href={images.resume} target='_blank' rel='noreferrer'>Resume!</a>
      </span>
      </h2>

      <div className='app__profiles'>
            {abouts.map((about, index) => (
              <motion.div
              whileInView={{opacity: 1}}
              whileHover={{scale: 1.1}}
              transition={{duration: 0.6, type:'tween'}}
              className='app__profile-item'
              key={about.title + index}
              >

                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
                <p className='p-text' style={{marginTop: 10}}>{about.description}</p>

              </motion.div>
            ))}
      </div>
    </>
  );
}

export default AppWrap(About,'about');