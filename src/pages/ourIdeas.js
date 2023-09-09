import React, { useState, useEffect } from 'react';
import Collection from '../components/Collection'; // assuming it's in the same directory
import { Link } from 'react-router-dom';
import '../styles/home.css';
function OurIdeas() {


    return (
        <div className="d-block">
            <div className='tin'>
                <h1 id='collectionName'>**Our Ideas</h1>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                <Link to="/explanation/ourIdeas/storage" className="nav-link active" style={{ textDecoration: '' }}>
                    <div className="m-3">
                        <Collection title={'Storage'} Content={'./'} size={2}/>
                    </div>
                </Link>
                </div>

            </div>

        </div>
    );
}

export default OurIdeas;
