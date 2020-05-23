import axios from 'axios';

(async () => {

	const url = 'https://jordan-tests-requests-express-server-nbxxguimx.now.sh/api';

	const axiosResponse = await axios.post(url);

	console.log('axiosResponse', axiosResponse.data, axiosResponse.status);


})();