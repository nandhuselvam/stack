const getUserName = () => {
	let name = null;
	setTimeout(() => {
		name = "Arthanari Panneerselvam";
		console.log(name);
	}, 2000);
};


const getPastOrders = () => {
	let ordersDetails = null;
	setTimeout(() => {
		ordersDetails = {
			orderId: '2001',
			amount: 4500,
			discount: 45,

		};
		console.log(ordersDetails);
	}, 2000);
};

get