import 'express-async-errors';
import * as express from 'express';
import error from './middlewares/error';
import router from './routers';

const app = express();

app.use(express.json());

app.use(router);

app.use(error);
 
export default app;