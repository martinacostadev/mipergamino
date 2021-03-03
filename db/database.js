import * as mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// const isDev = process.env.NODE_ENV !== "production";
// console.log('isDev', isDev)
// cosnt envFile = isDev ? ".env.development" : ".env";
// console.log('envFile', envFile)
// dotenv.config({ path: envFile });

// mongoose options
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
};

const {
  MONGO_HOSTNAME,
  MONGO_DB,
  MONGO_USERNAME,
  MONGO_PASSWORD,
} = process.env;

const dbConnectionURL = {
  MongoAtlas: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}${MONGO_HOSTNAME}/${MONGO_DB}?retryWrites=true&w=majority`,
};
mongoose.connect(dbConnectionURL.MongoAtlas, options);
const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(
    console,
    "Mongodb Connection Error:" + dbConnectionURL.MongoAtlas
  )
);
db.once("open", () => {
  console.log("Mongodb Connection Successful");
});
