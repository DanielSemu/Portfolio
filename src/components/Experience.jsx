// Experience.js
import React from 'react';
import lang1 from '../assets/lang1.png';
import lang2 from '../assets/lang2.png';
import lang3 from '../assets/lang3.jpg';
import lang4 from '../assets/lang4.png';
import lang5 from '../assets/lang5.png';
import lang6 from '../assets/lang6.png';
import lang7 from '../assets/tailwind.png';
import lang8 from '../assets/lang8.png';
import lang9 from '../assets/lang9.png';
import more from '../assets/more.png';
import './Experience.css';

const Experience = () => {
    const experience =[
        {
            id:1,
            img:lang5,
            title:"PYTHON",
            style:'shadow-pink-500'
        },
        {
            id:2,
            img:lang4,
            title:"JAVA SCRIPT",
            style:'shadow-yellow-500'
        },
        {
            id:3,
            img:lang1,
            title:"HTML",
            style:'shadow-orange-500'
        },
        {
            id:4,
            img:lang6,
            title:"REACT",
            style:'shadow-blue-600'
        },
        {
            id:5,
            img:lang8,
            title:"DJANGO",
            style:'shadow-green-500'
        },
        {
            id:6,
            img:lang2,
            title:"CSS",
            style:'shadow-blue-500'
        },
        {
            id:7,
            img:lang3,
            title:"JAVA",
            style:'shadow-orange-500'
        },
        {
            id:8,
            img:lang7,
            title:"TAILWIND CSS",
            style:'shadow-blue-500'
        },
        {
            id:9,
            img:lang9,
            title:"PHP",
            style:'shadow-pink-500'
        },
        {
            id:10,
            img:more,
            title:"MORE",
            style:'shadow-green-500'
        },
        
    ];

    return (
        <div name="experience" className='experience-container'>
            <div className='experience-content'>
                <div className='experience-title'>Experience</div>
                <div className='experience-description'>These are technologies I have worked and Experienced</div>
                <div className='grid-container'>
                    {experience.map(({id,img,title,style}) => (
                        <div key={id} className={`grid-item ${style}`}>
                            <img src={img} alt="" className='grid-image' />
                            <p className='grid-title'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
