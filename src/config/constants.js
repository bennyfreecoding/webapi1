const devConfig = {
  MONGO_URL: 'mongodb://localhost/webapi1-dve',
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost/webapi1-test',
};

const prodConfig = {
  MONGO_URL: 'mongodb://localhost/webapi1-prod',
};

const defaultConfig = {
  PORT : process.env.PORT || 3000,
};

function envConfig(env){
  console.log(env);
  switch(env){
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
}
