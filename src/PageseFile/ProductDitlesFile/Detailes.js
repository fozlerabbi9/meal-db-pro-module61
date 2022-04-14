import React from 'react';
import { useParams } from 'react-router-dom';
import './Detailes.css';

const Detailes = () => {
    const {ditlesId} = useParams();
    return (
        <div>
            <h2>this is detailes page id == {ditlesId}</h2>
            
        </div>
    );
};

export default Detailes;