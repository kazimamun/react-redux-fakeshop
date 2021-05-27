import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct } from '../redux/actions/product-actions';

const ProductDetails = () => {
    const product = useSelector(state=>state.product)
    const {productId} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=>dispatch(selectedProduct(data)))
    },[productId, dispatch])
    return (
        <div>
            {
                product && <div>
                    <p><strong>{product.title}</strong> from <strong>{product.category}</strong></p>
                    <img src={product.image} alt={product.title} />
                    <p><b>Price: $ {product.price}</b></p>
                    <p><strong>Details:</strong> {product.description}</p>
                </div>
            }
        </div>
    );
};

export default ProductDetails;