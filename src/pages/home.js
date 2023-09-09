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
            <Link to="/explanation" className="nav-link active " style={{ textDecoration: '' }}>
                <Collection title={'Epoc'} Content={'home'} />
            </Link>
        </div>
    );
}

export default Home;
