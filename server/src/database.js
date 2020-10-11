const mongoose = require('mongoose');
const dotenv = require('dotenv');
const isDev = process.env.NODE_ENV !== "production";
console.log('isDev', isDev)
const envFile = isDev ? ".env.development" : ".env";
console.log('envFile', envFile)
dotenv.config({ path: envFile });

// mongoose options
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0
};

// mongodb environment variables
const {
  MONGO_HOSTNAME,
  MONGO_DB,
  MONGO_PORT
} = process.env;

const dbConnectionURL = {
  'LOCALURL': `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
};
mongoose.connect(dbConnectionURL.LOCALURL, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + dbConnectionURL.LOCALURL));
db.once('open', () => {
  // we're connected !
  console.log('Mongodb Connection Successful');
});