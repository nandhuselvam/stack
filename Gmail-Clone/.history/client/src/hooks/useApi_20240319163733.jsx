import { useState } from 'react';
import API from '../services/api'


const useApi = () => {
		const [response, setResponse] = useState(null);
		const[error, setError] = use
	const call = async () => {
	
		try {
			let response = await API();

		} catch (error) {}
	}
}