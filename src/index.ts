import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../.env' });

(async () => {

	const url = `https://<domain-name>/tester`;
	// const proxyUrl = `http://api.scraperapi.com?api_key=${process.env.scraperApiKey}&url=${url}`;

	const axiosResponse = await axios.get(url);

	console.log('axiosResponse', axiosResponse.data, axiosResponse.status);

})();