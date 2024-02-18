import React from 'react'


function ProductList({ onAddToCart })
 {
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
			
                {products.map((product, index) => (
                    <li key={index}>
                        {product}
                        {/* <button onClick={() => onAddToCart(product)}>Add to Cart</button> */}
						<radio onClick={()=> edit (product)}></radio>
                    </li>
                ))}
            </ul>
			<div>
			Filter:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
			</div>
      
			
        </div>
    )
}

export default ProductList