import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Product = () => {
    const products = useSelector(state => state.products.products)
    return (
        <div className="row row-cols-1 row-cols-md-5 g-4">
            {
                products.map(product => {
                    return ( 
                        <Link key={product.id} to={`/product/${product.id}`}>
                            <div className="col">
                                <div className="card">
                                    <img style={{ height: '200px', width: '100%' }} src={product.image} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">Price: ${product.price}</p>
                                        <p className="card-text">{product.category}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Product;