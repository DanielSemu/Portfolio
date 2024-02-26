// Portfolio.js
import React from 'react';
import port1 from '../assets/port1.png';
import port2 from '../assets/airline.jpg';
import port3 from '../assets/notelist.png';
import port4 from '../assets/taskmanager.png';
import port5 from '../assets/gateway.png';
import port6 from '../assets/DMS.jpg';
import './Portfolio.css';

const Portfolio = () => {
    const portfolios= [
        {
            id:6,
            src:port6,
            text: "React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS",
            url:"https://github.com/DanielSemu/Dormitory_Managment_Sytstem_For_WKU/tree/master"
        },
        {
            id:1,
            src:port1,
            text: "React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS",
            url:"https://github.com/DanielSemu/E-Commerce"
        },
        {
            id:2,
            src:port2,
            text: "React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS",
            url:"https://github.com/DanielSemu/AirLine_Reservation_System-Using-Java.git"
        },
        {
            id:3,
            src:port3,
            text: "React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS",
            url:"https://github.com/DanielSemu/Notepad-Using-DjangoReact.git"
        },
        {
            id:4,
            src:port4,
            text: "React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS",
            url:"https://github.com/DanielSemu/ToDoList-Django-React/tree/master"
        },
        {
            id:5,
            src:port5,
            text: "React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS",
            url:"https://github.com/DanielSemu/Gateway_Apllication_for_AdiB.git"
        },
    ];

    return (
        <div name="Projects" className='bg-gradient'>
            <div className='portfolio-container'>
                <div className='portfolio-title'>Projects</div>
                <div className='portfolio-subtitle'>Check out some of my recent Projects here</div>
                <div className='grid-container'>
                    {portfolios.map(({id,src,text,url}) => (
                        <div key={id} className='portfolio-item'>
                            <img src={src} alt="" />
                            <div className='portfolio-text'>{text}</div>
                            <div className='portfolio-link'>
                                <a href={url} target='_blank'>Source Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    );
}

export default Portfolio;
