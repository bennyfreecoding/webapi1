import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';

const isDev = true;
const isProd = false;

export default app => {

  if(isProd){
    app.use(compression());
    app.use(helmet());
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  if(isDev){
    app.use(morgan('dev'));
  }

}
