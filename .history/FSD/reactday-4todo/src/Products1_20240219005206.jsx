import React from 'react'

function ProductList({ onAddToCart })
 {
    const products = ['Name: Office Task-1',
	 'Description: this is the description for My first ', 'Status']; 
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
			
                {products.map((product, index) => (
                    <li key={index}>
                        {product}
                        {/* <button onClick={() => onAddToCart(product)}>Add to Cart</button> */}
						<radio onClick={()=> edit (product)}></radio>
                    </li>
                ))}
            </ul>
			
      
			
        </div>
    )
}

export default ProductList