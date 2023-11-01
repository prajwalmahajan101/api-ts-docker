import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
	const [message, setMessage] = useState<string>('');
	useEffect(() => {
		const getData = async () => {
			let res = await axios.get<{ msg: string }>('/api');
			let data = res.data;
			setMessage(data.msg);
		};
		getData();
	}, []);
	console.log(process.env);
	return (
		<div className="App">
			<h1>{process.env.REACT_APP_TEST_REACT_VAR}</h1>
			<hr></hr>
			<h1>{message}</h1>
		</div>
	);
}

export default App;
