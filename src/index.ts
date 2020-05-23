import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../.env' });

(async () => {

	const url = `https://backend.cobaltintelligence.com/tester`;
	const proxyUrl = `http://api.scraperapi.com?api_key=${process.env.scraperApiKey}&url=${url}`;

	const axiosResponse = await axios.get(url, {
		headers: {
			'pizza': 'with Cheese',
			'Referer': 'pizzaland.com'
		}
	});

	console.log('axiosResponse', axiosResponse.data, axiosResponse.status);


})();