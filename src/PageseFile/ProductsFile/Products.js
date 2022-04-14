import React from 'react';
import useData from '../DataFetchFile/useData';
import './Products.css';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [Products] = useData();
    return (
        <div>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-5 gx-5 gy-4'>
                {
                    Products?.map(product => <SingleProduct
                        key={product.idCategory}
                        product={product}
                    ></SingleProduct>)
                }
            </div>

        </div>
    );
};

export default Products;
