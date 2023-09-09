import React, { useState, useEffect } from 'react';
import Collection from '../components/Collection'; // assuming it's in the same directory
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Contact() {


    return (
        <div className="d-block">
            <div className='tin'>
                <h1 id='collectionName'>@Contact</h1>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <div className="m-3">
                        <Collection title={''} Content={`Email- inquiries@epoc.life  Instagram- epoc.life  TikTok-  epoc.life`} size={0}/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Contact;
