import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./db/conn.js";
import router from "./routes/router.js";

dotenv.config();

const app = express();

ConnectDB();
//app middleware
app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listning on port number ${PORT}`.bgBlue);
});
