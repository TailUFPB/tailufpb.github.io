import React from 'react';

import './styles.css';

interface BackgroundTemplateProps {
    header: string;
    subheader: string;
}

const BackgroundTemplate: React.FC<BackgroundTemplateProps> = ({ header, subheader }) => {
    return (
        <div className='page-background'>
            <div className='black-one'>
                <div className='background-headers'>
                    <h1 className='background-header'>{header}</h1>
                    <h2 className='background-subheader'>{subheader}</h2>
                </div>
                <div className='background-balls'>
                    <div className='ball first-ball'></div>
                    <div className='ball second-ball'></div>
                    <div className='ball third-ball'></div>
                    <div className='ball fourth-ball'></div>
                    <div className='ball fifth-ball'></div>
                </div>
            </div>
            <div className='black-two'></div>
        </div>
    );
};

export default BackgroundTemplate;
