function addNumbers(a, b) {
	return a + b;
  }

  const result = addNumbers(5, 7);

  console.log("The result is:", result);


  const getUserName = () => {
	let name = null;
	setTimeout(() => {
		name = "Arthu";
		console.log(name);
	},5000);
  };

  const getPastOrders = () => {

	let orderDetails = null;
	setTimeout(() => {
		orderDetails = {
			orderId: "500";
			amount: 4500,
			discount: 50,
		};
		console.log(orderDetails);
	}, 5000);

  };
  
getUserName();
getPastOrders()