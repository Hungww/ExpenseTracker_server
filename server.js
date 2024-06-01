import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config'

import { setupRoutes } from './src/utils/app.util.js';


import userRouter from './src/routes/user.route.js';
import promotionsRouter from './src/routes/promotions.route.js';
import subcriptionRouter from './src/routes/subscription.route.js';


const app = express();

let PORT = process.env.PORT || 8000;
app.use(cors({
    origin : 'exp://localhost:8081'
}));
//body parser
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
app.use(bodyParser.text({ limit: '200mb' }));
//test route
app.get('/', (req, res) => {
    res.send('Backend updated 1/6');
});

const routes = [
    {
        path: '/user',
        router: userRouter
    },
    {
        path: '/promotions',
        router: promotionsRouter
    },
    {
        path: '/subscription',
        router: subcriptionRouter
    }
];
setupRoutes(app, routes);

//
app.listen(PORT, () => console.log('Example app is listening on port 3000.'));