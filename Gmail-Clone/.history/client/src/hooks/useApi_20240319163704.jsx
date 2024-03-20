import { useState } from 'react';
import API from '../services/api'


const useApi = () => {
		const [response, setResponse]
	const call = async () => {
	
		try {
			let response = await API();

		} catch (error) {}
	}
}