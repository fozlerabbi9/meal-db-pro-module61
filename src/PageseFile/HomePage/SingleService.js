import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const SingleService = ({ service }) => {
    const { name, img, id, price, description } = service;
    const navigate = useNavigate();
    const showMoreFun = (id) =>{
        navigate(`/Detailes/${id}`)
    }
    return (

        <div className="col">
            <div className='service-style'>
                <img src={img} alt="" />
                <h4>Name : {name}</h4>
            </div>
            <button onClick={()=>showMoreFun(id)}>show ditles</button>
        </div>

    );
};

export default SingleService;

