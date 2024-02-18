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
	const [filter, setFilter] = useState('all');

	const filteredTodos = todos.filter(todo => {
		if (filter === 'all') {
		  return true;
		} else if (filter === 'completed') {
		  return todo.status === 'completed';
		} else {
		  return todo.status === 'not completed';
		}
	  });
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