import React, { useState, useEffect, Component } from 'react';
import AnimatedVideo from '../components/AnimatedVideo'; // assuming it's in the same directory
import '../styles/Collection.css';
import imageMe from '../assets/images/imageMe.jpeg';

function Collection({ title, Content, size }) {
    const [home, setHome] = useState(false);
    const [me, setMe] = useState(false);
    const [small, setSmall] = useState(false);
    const [medium, setMedium] = useState(false)
    const [large, setLarge] = useState(false);
    const [content, setContent] = useState('');
    const [subContent, setSubContent] = useState('');
    const [titleShow, setTitleShow] = useState(true);
    useEffect(() => {
        console.log(title + Content)
        if (Content == 'home') {
            setHome(true)
        }
        else if (Content == 'imageMe') {
            setMe(true)
            setTitleShow(false);
        }
        else if (Content.length <= 2) {
            setContent(Content);
        }
        else {
            setTitleShow(false);
            setSubContent(Content);
        }

        if (size == 0) {
            setSmall(true)
        }
        else if (size == 1) {
            setMedium(true)
        }
        else if (size == 2) {
            setLarge(true)
        }
    })
    return (
        <div className={'container'}>
            {titleShow ? <div className="title">
                <p id='titleText'>{title}</p>
            </div> : null}
            <div className="main">
                <h1 id='content'>{content}</h1>
                {small ?
                    <p id='subContentS'>{subContent}</p>
                    : null}
                {medium ?
                    <p id='subContentM'>{subContent}</p>
                    : null}
                {large ?
                    <p id='subContentL'>{subContent}</p>
                    : null}

                {me ?
                    <img id='me' src={imageMe} />
                    : null}
                {home ?
                    <AnimatedVideo />
                    : null}
            </div>
        </div>
    );
}

export default Collection;
