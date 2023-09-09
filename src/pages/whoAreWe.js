import React, { useState, useEffect } from 'react';
import Collection from '../components/Collection'; // assuming it's in the same directory
import { Link } from 'react-router-dom';

function WhoAreWe() {


    return (
        <div className="d-block">
            <div className='tin'>
                <h1 id='title'>?Who Are We?</h1>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <div className="m-3">
                        <Collection title={''} Content={`Epoc is a creative platfrom of shared conciousness without the burden of time.`} size={0} />
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`imageMe`} />
                    </div>
                    <div className="m-3">
                        <Collection title={''} Content={`Epoc Exists`} size={2}/>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default WhoAreWe;
