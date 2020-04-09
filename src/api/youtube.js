import axios from 'axios';

export const KEY = 'AIzaSyAgvt3uhUuGI6sGETGc45lPYg2baDrQFMA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
