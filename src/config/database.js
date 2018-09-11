import constants from './constants';

import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

try{
  mongoose.connect(constants.MONGO_URL,{ useNewUrlParser: true });
}catch(err){
  mongoose.createConnection(constants.MONGO_URL,{ useNewUrlParser: true });
}

mongoose.connection
.once('open',() => console.log('MongoDB Running') )
.on('error', e => {
  throw e;
});
