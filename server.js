require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.API_PORT || 3001;
const subscribeRoutes = require('./routes/subscribe.js')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('mqtt-to-mongodb is running.'))

app.use('/subscribe', subscribeRoutes)

app.get('/')

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`API URL: http://localhost:${port}`);
});