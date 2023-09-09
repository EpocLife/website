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
                        <Collection title={''} Content={`Colletion - Allows users to categorise and Abstarct events and Content.`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`Image - Visual content type which captures an instant in time.`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`Video - Visual content type which captures an array of intances in time.`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`Text - A mewdium for communication via symbolic representation.`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`Sound - Audible Content type which captures sounds.`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`3D Model - Visual content type which captures events in the same dimensions we do `} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`file - Any other digital representaion of data, i.e. pdf file, code, etc...`} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`Web Link - A connection to an external website.`} size={0}/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Mediums;
