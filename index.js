import express from 'express';
import bodyParser from 'body-parser';


import stopsRoutes from './routes/stops.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/stops', stopsRoutes)

app.get('/', (req, res) => {
    res.send('asdasd')
})

app.listen(PORT, () => console.log(`${PORT}`));