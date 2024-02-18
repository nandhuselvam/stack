import React from 'react'

function ProductList({ onAddToCart }) {
    const products = ['Name: Office Task-1',
	 'Description: this is the description for My first ', 'Carrot'];
    const grey = "orange";
    const divStyle = {
        border: '1px solid white',
        borderRadius: '8px',
        padding: '15px',
        texAlign: 'corner',
        backgroundColor: 'black'
    }
    return (
        <div style={divStyle}>
            <h2>Products</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product}
                        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList