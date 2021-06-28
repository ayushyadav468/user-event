const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).json({ message: 'server is working' });
});

app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`app listening on http://localhost:${PORT}`);
});
