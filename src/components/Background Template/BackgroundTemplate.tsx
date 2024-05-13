import React, { useState, useEffect } from 'react';
import './styles.css';

interface BackgroundTemplateProps {
    header: string;
    subheader: string;
}

const BackgroundTemplate: React.FC<BackgroundTemplateProps> = ({ header, subheader }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const mouseXPercentage = (event.clientX / window.innerWidth) * 100;
        const mouseYPercentage = (event.clientY / window.innerHeight) * 100;

        setMousePosition({ x: mouseXPercentage, y: mouseYPercentage });
    };

    useEffect(() => {}, []);

    return (
        <div className='page-background' onMouseMove={handleMouseMove}>
            <div className='black-one'>
                <div className='background-headers'>
                    <h1 className='background-header'>{header}</h1>
                    <h2 className='background-subheader'>{subheader}</h2>
                </div>
                <div className='background-balls'>
                    <div className="ball first-ball" style={{ left: `calc(10% + ${mousePosition.x / 50}%)`, top: `calc(20% + ${mousePosition.y / 50}%)` }}></div>
                    <div className="ball second-ball" style={{ left: `calc(45% - ${mousePosition.x / 50}%)`, top: `calc(17% - ${mousePosition.y / 50}%)` }}></div>
                    <div className="ball third-ball" style={{ left: `calc(80% + ${mousePosition.x / 30}%)`, top: `calc(25% + ${mousePosition.y / 30}%)` }}></div>
                    <div className="ball fourth-ball" style={{ left: `calc(55% - ${mousePosition.x / 30}%)`, top: `calc(55% - ${mousePosition.y / 30}%)` }}></div>
                    <div className="ball fifth-ball" style={{ left: `calc(25% + ${mousePosition.x / 80}%)`, top: `calc(60% + ${mousePosition.y / 80}%)` }}></div>
                </div>
            </div>
            <div className='black-two'></div>
        </div>
    );
};

export default BackgroundTemplate;
