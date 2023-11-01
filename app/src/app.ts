import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());

app.use('/', (req, res) => {
	res.status(200).json({
		msg: `Working with docker ${process.env.TEST_VAR}`,
	});
});

app.listen(8000);
