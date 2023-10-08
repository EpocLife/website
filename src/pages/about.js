import React, { useState, useEffect } from 'react';
import Collection from '../components/Collection'; // assuming it's in the same directory
import { Link } from 'react-router-dom';
import '../styles/home.css';
function About() {


    return (
        <div className="d-block">
            <div className='tin'>
                <h1 id='collectionName'>//About</h1>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <Link to="/explanation/about/whoarewe" className="nav-link active" style={{ textDecoration: '' }}>
                        <div className="m-3">
                            <Collection title={'Who are We?'} Content={`?`} />
                        </div>
                    </Link>
                    <div className="m-3">
                        <Collection title={''} Content={`Preserving the works of consciousness`} size={1}/>
                    </div>
                    <Link to="/explanation/about/contact" className="nav-link active" style={{ textDecoration: '' }}>
                        <div className="m-3">
                            <Collection title={'Contact'} Content={`@`} />
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default About;
