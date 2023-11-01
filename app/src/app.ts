import express from 'express';

const app = express();

app.use('/', (req, res) => {
	res.status(200).json({
		msg: `Working with docker ${process.env.TEST_VAR}`,
	});
});

app.listen(8000);
