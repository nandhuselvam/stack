// function addNumbers(a, b) {
// 	return a + b;
//   }

//   const result = addNumbers(5, 7);

//   console.log("The result is:", result);


//   const getUserName = () => {
// 	let name = null;
// 	setTimeout(() => {
// 		name = "Arthu";
// 		console.log(name);
// 	},5000);
//   };

//   const getPastOrders = () => {

// 	let orderDetails = null;
// 	setTimeout(() => {
// 		orderDetails = {
// 			orderId: "500",
// 			amount: 4500,
// 			discount: 50,
// 		};
// 		console.log(orderDetails);
// 	}, 5000);

//   };
  
// getUserName();
// getPastOrders();


const http =  require ("http");

const server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type": "text/pain" });

	res.end("Greeting!!!");
});

server.listen?(3000, () => {
	console.log("server is running at http://localhost:3000/");
	
})