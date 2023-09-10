import React, { useState, useEffect } from 'react';
import Collection from '../components/Collection'; // assuming it's in the same directory
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Mediums() {


    return (
        <div className="d-block">
            <div className='tin'>
                <h1 id='collectionName'>{`>Mediums`}</h1>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                <div className="m-3">
                        <Collection title={''} Content={`Colletion - Allows users to categorise and abstarct experiences and content.`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`Image - Captures an experience in a single frame.`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`Video - Captures an experience in multiple frames.`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`Text - A medium for communication via symbolic representation.`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`Time`} size={2}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`Sound - Captures an experience in wave form.`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`3D Model - Captures experiences in the same dimensions we perceive.`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`file - Any other digital representaion of data, i.e. pdf file, code, etc...`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`Web Link - Link to an external website/source.`} size={0}/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Mediums;
