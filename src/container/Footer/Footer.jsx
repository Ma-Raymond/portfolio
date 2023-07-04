import React,{useState, useEffect, useRef} from 'react'

import './Footer.scss';
import {images} from '../../constants';
import { AppWrap } from '../../wrapper';
import {client} from '../../client';
import emailjs from "emailjs-com";
import { BsLinkedin } from 'react-icons/bs'


const Footer = () => {

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_pmafpsj', 'template_ijmp4sf', form.current, 'HBe7qS9PJVit4qnJF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

  


  const [formData, setFormData] = useState({name:'',email:'',message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)


  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
   <>
    <div className='app__footer app__flex'>


<div className='app__coffee'>
<h2 className='head-text'>Let's have a coffee chat ☕</h2>


</div>

<div className='app__footer-cards'>
    <div className='app__footer-card'>
      <img src={images.email} alt='email'/>
      <a href='mailto:raymond.ma003@gmail.com' className='p-text'>
          raymond.ma003@gmail.com
      </a>
    </div>

    <a href="https://www.linkedin.com/in/ma-raymond/"  target='_blank' rel='noreferrer'>
    <div className='app__footer-card'>
      <img src={images.linkedin} alt='email'/>
      <a className='p-text'>
          LinkedIn Profile
      </a>
    </div>
    </a>
    </div>
    {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <form ref={form} onSubmit={sendEmail} className='app__flex'>
          <div className='app__flex'>
          <input className='p-text' type="text" name="name" placeholder='Your Name'/>
          </div>
          <div className='app__flex'>
          <input className='p-text' type="email" name="email" placeholder='Your email' />
          </div>
          <div className='app__flex'>
          <textarea name="message" placeholder='Your Message'/>
          </div>
          <button className='p-text' type="submit" placeholder='Send Message' value="message" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </form>
      </div>


    : <div className='head-text'>
        Thanks for contacting me!
    </div> }

   


    


    {/* <div className='copyright'>
                <p className='p-text'>@2022 Raymond Ma</p>
                <p className='p-text'>All rights reserved</p>
    </div> */}
        </div>
   </>
  )
}

export default AppWrap(Footer, 'contact')