import React from 'react';
import '../styles/explanation.css';
import Collection from '../components/Collection'; // assuming it's in the same directory
import { Link } from 'react-router-dom';

function Explanation() {

    return (
        <div className="d-block">
            <div className='tin'>
                <h1 id='title'>Epoc</h1>
                <h3 id='subTitle'>A collective archive of humanity's consciousness</h3>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                <Link to="/explanation/about" className="nav-link active" style={{ textDecoration: '' }}>
                    <div className="m-3">
                        <Collection title={'About'} Content={'//'} />
                    </div>
                </Link>
                <Link to="/explanation/ourIdeas" className="nav-link active" style={{ textDecoration: '' }}>
                    <div className="m-3">
                        <Collection title={'Our Ideas'} Content={'**'} />
                    </div>
                </Link>
                <Link to="/explanation/features" className="nav-link active" style={{ textDecoration: '' }}>
                    <div className="m-3">
                        <Collection title={'Features'} Content={'##'} />
                    </div>
                </Link>
                </div>

            </div>

        </div>
    );
}

export default Explanation;
