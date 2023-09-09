import React, { useState, useEffect } from 'react';
import Collection from '../components/Collection'; // assuming it's in the same directory
import { Link } from 'react-router-dom';

function Gateway() {


    return (
        <div className="d-block">
            <div className='tin'>
                <h1 id='title'>--Gateway</h1>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <div className="m-3">
                        <Collection title={''} Content={'Feature that shows the timeline of humanity, where content can be viewed by others'} size={0} />
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={'The collective feed which we can connect with one another on.'} size={0} />
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={'Recommend content and users based upon your interactions and interests.'} size={0} />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Gateway;
