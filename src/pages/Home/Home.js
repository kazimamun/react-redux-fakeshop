import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Product from '../../container/Product';
import { setProducts } from '../../redux/actions/product-actions';

const Home = () => {
    const dispatch = useDispatch();
    const fetchProduct = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch(err=> console.log('some error occurd', err))
        dispatch(setProducts(response.data));
    }
    useEffect(()=>{
        fetchProduct()
    })
    return (
        <div>
            <Product />
        </div>
    );
};

export default Home;