import { useState } from 'react';
import API from '../services/api'


const useApi = () => {
		const [response, setResponse] = useState(null);
		const [error, setError] = useState("");
		const [isloading, setIsLoading] = useState(false);

	const call = async () => {
			setIsLoading(true);
		try {
			let res = await API();
			setResponse(res.data);
		} catch (error) {
			setError(error.message);
		} finally{
			setIsLoading
		}
	}
}