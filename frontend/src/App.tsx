import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_HOST } from './constants/API';

import './App.css';

function App() {
	const [message, setMessage] = useState<string>('');
	useEffect(() => {
		const getData = async () => {
			let res = await axios.get<{ msg: string }>(`${API_HOST}/api`);
			let data = res.data;
			setMessage(data.msg);
		};
		getData();
	}, []);
	console.log(process.env);
	return (
		<div className="App">
			<h1>Hi, There {process.env.REACT_APP_TEST_REACT_VAR}</h1>
			<hr></hr>
			<h1>{message}</h1>
		</div>
	);
}

export default App;
