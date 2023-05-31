import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import JavaScript from '../assets/JavaScript.png';
import react from '../assets/react.png';
import next from '../assets/next.jpeg';
import rails from '../assets/rails.png';
import git from '../assets/git.png';
import Tailwind from '../assets/tailwind.png';



const Experience = () => {
  return <div name='experience' className='bg-gradient-t0-b from-gray-800 to-black
  w-full h-screen'>
    <div className='max-w-screen-lg mx-auto '>
        <div>
            <p>Experience</p>
            <p>these are the technologies i have  worked with</p>
        </div>
        <div>
            <div>
                <img src={html} alt="html"/>
            </div>  
        </div>
    </div>
         </div>

}

export default Experience