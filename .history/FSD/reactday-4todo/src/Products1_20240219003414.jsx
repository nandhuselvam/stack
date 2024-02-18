import React from 'react'

function ProductList({ onAddToCart }) {
    const products = ['Name: Office Task-1',
	 'Description: this is the description for My first ', 'Status'];
    const grey = "orange";
    const divStyle = {
        border: '10px solid white',
        borderRadius: '1px',
        padding: '1px',
        texAlign: 'left',
        backgroundColor: 'lightblue'
    }
    return (
        <div style={divStyle}>
            <h2>Products</h2>
            <ul>
                {products.map((product, stats) => (
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