import express from "express";
import mongoose from "mongoose";
import cors from "cors"

import routes from "./routes.js";

const app = express();
try {
  const uri = "mongodb://localhost:27017/furnitures";
  await mongoose.connect(uri);

  console.log("Successfully connected to DB");
} catch (err) {
  console.log("Connection to DB failed!");
  console.log(err.message);
}

// Setup CORS

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     next();
// });

app.use(cors());
app.use(express.json());

app.use(routes);


app.listen(3030, () =>
  console.log("Server is listening on http://localhost:3030....")
);
