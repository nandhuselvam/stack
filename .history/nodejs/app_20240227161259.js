

const getUserName = () => {
	let name = null;
	setTimeout(() => {
		name = "Arthanari";
		console.log(name);
	},5000);
};

const getpastOrders = () => {
	let orderDetails = null;
	setTimeout(() => {
		orderDetails = {
			orderid: "2000", 
			amount: 5000, 
			discount: 50 
		};
		
		console.log(orderDetails);
	}, 5000);
};