import express from 'express'
import cors from 'cors'
import routes from './routes.js';

const port = 3005;

const app = express();

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/git', routes)

app.listen(port, () => console.log(`server started at http://localhost:${port}`))


