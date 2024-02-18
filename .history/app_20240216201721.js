function addNumbers(a, b) {
	return a + b;
  }

  const result = addNumbers(5, 7);

  console.log("The result is:", result);


  const getUserName = () => {
	let name = null;
	setTimeout(() => {
		name = "Arthu";
		console.log(name)
	})
  }
  