import React from 'react';
import './SingleProduct.css';

const SingleProduct = ({ product }) => {
    const { strCategory, strCategoryThumb } = product;
    return (

        <div className="col ">

            <div className='single-pro-style'>
                <img src={strCategoryThumb} alt="" />
                <h3>Name : {strCategory}</h3>
                <button>Detailes</button>
            </div>

        </div>

    );
};

export default SingleProduct;