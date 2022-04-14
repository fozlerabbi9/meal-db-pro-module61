import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useData from '../DataFetchFile/useData';
import './Home.css';
import HomeProsuct from './HomeProsuct';
import SingleService from './SingleService';

const Home = () => {
    const [Products] = useData();

    const [services, setService] = useState([]);
    useEffect(() => {
        fetch("service.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    // console.log(service.length)
    return (
        <div>

            <div>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-5 gx-5 gy-4'>
                    {
                        Products?.slice(0, 6).map(product => <HomeProsuct
                            key={product.idCategory}
                            product={product}
                        ></HomeProsuct>)
                    }
                </div>
                <div className='showMore-style'>
                    <Link to="/products">Show More</Link>
                </div>
            </div>

            <div>
                <h2 className='text-primary pb-4'>Servising Senter</h2>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-5 gx-5 gy-4'>
                    {
                        services?.map(service => <SingleService
                            service={service}
                            key={service.id}
                        ></SingleService>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;
