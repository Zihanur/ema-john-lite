import React from 'react';
import './Shop.css'

const Shop = () => {
    return (
        <section>
            <div className='title-container'>
                <h1 className='title'>Add Your Favorite Item</h1>
            </div>
            <div className='shop-container'> 
                <div className="product-container">
                    <h3>here is products</h3>
                </div>
                <div className="card-container">
                    <h3 className='card-container-title'>Your Shop Card</h3>
                    <div className='card-list'>
                        <p>Selected Items: 6</p>
                        <p>Total Price: $1140</p>
                        <p>Tax: $114</p>
                        <p className='card-total-price'>Grand Total: $1559</p>
                    </div>
                    <div className='card-btn-container'>
                        <button className='clear-cart-btn'>Clear Cart</button>
                        <button className='review-cart-btn'>Review Order</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;