import React, { useState, useEffect } from 'react';
import Collection from '../components/Collection'; // assuming it's in the same directory
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Verification() {
  

    return (
        <div className="d-block">
            <div className='tin'>
                <h1 id='collectionName'>==Verification</h1>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <div className="m-3">
                        <Collection title={''} Content={'We must try to make sure users are who they say they are.'} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={'Using Worldcoin may be a useful technology to solve this problem.'} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={'We must also consider date of death and how to validate this.'} size={0}/>
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={'Perhaps users asssign an executor to declare their death.'} size={0}/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Verification;
