import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeProsuct = ({product}) => {
    const { strCategory, strCategoryThumb , idCategory} = product;
    const navigate = useNavigate();

    const ditlesButton = (idCategory) =>{

        navigate(`/Detailes/${idCategory}`)
        console.log(idCategory)
    }

    return (

        <div className="col ">

            <div className='single-pro-style'>
                <img src={strCategoryThumb} alt="" />
                <h3>Name : {strCategory}</h3>
                <button onClick={()=>ditlesButton(idCategory)}>Detailes</button>
            </div>

        </div>

    );
};

export default HomeProsuct;