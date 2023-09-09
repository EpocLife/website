import React, { useState, useEffect } from 'react';
import Collection from '../components/Collection'; // assuming it's in the same directory
import { Link } from 'react-router-dom';

function Features() {
  

    return (
        <div className="d-block">
            <div className='tin'>
                <h1 id='title'>##Features</h1>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                <Link to="/explanation/features/mediums" className="nav-link active" style={{ textDecoration: '' }}>
                    <div className="m-3">
                        <Collection title={'Mediums'} Content={'>'} />
                    </div>
                </Link>
                <Link to="/explanation/features/gateway" className="nav-link active" style={{ textDecoration: '' }}>
                    <div className="m-3">
                        <Collection title={'Gateway'} Content={'--'} />
                    </div>
                </Link>
                <Link to="/explanation/features/verification" className="nav-link active" style={{ textDecoration: '' }}>
                    <div className="m-3">
                        <Collection title={'Verification'} Content={'=='} />
                    </div>
                </Link>
                </div>

            </div>

        </div>
    );
}

export default Features;
