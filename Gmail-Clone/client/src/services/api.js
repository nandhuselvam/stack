import axios from 'axios';

const API_URL = 'http://localhost:8000';

const API_GMAIL = async (urlObject, payload) => {
	return await axios({
		method: urlObject.method,
		url: `${API_URL}/${urlObject.endpoint}`,
		date:payload
	})
}

export default API_GMAIL;