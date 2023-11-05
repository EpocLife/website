import React, { useState, useEffect } from 'react';
import Collection from '../components/Collection'; // assuming it's in the same directory
import '../styles/home.css';

import { Link } from 'react-router-dom';

function Home() {
    const [isVisible, setIsVisible] = useState(true);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className='linkContainer'>
            <Link to="/explanation" className="nav-link active " style={{ textDecoration: '', marginBottom: 50 }}>
                <Collection title={'Epoc'} Content={'home'} />
            </Link>
            <div style={{textAlign: 'center'}}>
                <h2>Expected Launch: 01/12/2023</h2>
            </div>
        </div>

    );
}

export default Home;
