import React from 'react';
import Card from './Card/Card';

const CardGroup = () => {
    const products = [
        { name: 'vivo Y2o', id: 1, price: 20000 },
        { name: 'vivo Y51', id: 2, price: 23000 },
        { name: 'vivo Y71', id: 3, price: 22000 }
    ]

    return (
        <div>
            <h1>This is cart. </h1>
            <div class="card-group">
                {
                products.map(product => <Card
                 product={product}
                 key={product.id}
                ></Card>)
            }
            </div>
        </div>
            
       
    );
};

export default CardGroup;