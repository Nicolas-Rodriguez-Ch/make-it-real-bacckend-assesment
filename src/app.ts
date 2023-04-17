import express, { Express } from 'express';
import configExpress from './config/express';
import routes from './routes';

const app : Express = express();

const port = process.env.PORT || 8080;

configExpress(app);

routes(app);

app.listen(port, ()=> {
  console.log(`Server running on port ${port}`);
});