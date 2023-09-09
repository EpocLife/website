import React, { useState, useEffect } from 'react';
import Collection from '../components/Collection'; // assuming it's in the same directory
import { Link } from 'react-router-dom';

function Storage() {


    return (
        <div className="d-block">
            <div className='tin'>
                <h1 id='title'>./Storage</h1>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <div className="m-3">
                        <Collection title={''} Content={'1. Decentralized. A way in which data can be distributed. Epoc aims to adopt this method.'} size={0} />
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`2. Physical Pods. Devices used to store Epoc's archives. Digital timecapsules.`} size={0} />
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={'3. Other ways in which we can store data in the physical world indefinitely.'} size={0} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Storage;
