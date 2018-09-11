import express from 'express'

import constants from './config/constants'

import './config/database';


console.log('=============================================');
console.log(constants);
console.log('=============================================');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,err => {
  if(err){
    throw err;
  }else {
    console.log(`
      Server runing on port : ${PORT}
      ---
      Running on ${process.env.NODE_ENV}
      --
      Make something great!
    `);
  }
});
