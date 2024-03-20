import axios from 'axios';

const API_URL = 'http://localhost:8000';

const API_GMAIL = async (urlObject) => {
	return await axios({
		method:'urlObject',
		url: `${API_URL}/endpoint`,
		date:{}
	})
}

export default API_GMAIL;