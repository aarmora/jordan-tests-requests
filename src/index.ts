import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../.env' });

(async () => {

	// const url = `http://api.scraperapi.com?api_key=${process.env.scraperApiKey}&url=https://jordan-tests-requests-express-server-nbxxguimx.now.sh/api`;
	const url = `https://jordan-tests-requests-express-server-nbxxguimx.now.sh/api`;

	const axiosResponse = await axios.post(url);

	console.log('axiosResponse', axiosResponse.data, axiosResponse.status);


})();