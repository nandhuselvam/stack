import { useState } from 'react';
import API from '../services/api'


const useApi = () => {
		const [response, setResponse] = useState(null);
		const [error, setError] = useState("");
		const [isloading, setIsLoading] = useState(false);

	const call = async () => {
	
		try {
			let res = await API();
			set

		} catch (error) {}
	}
}