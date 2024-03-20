import axios from 'axios';

const API_URL = 'http://localhost:8000';

const API_GMAIL = () => {
	axios({
		method:'delete',
		url: `${API_URL}/endpoint`,
		date:{}
	})
}