import mongoose from "mongoose";

const ConnectDB = () => {
  const DB = process.env.DATABASE;
  mongoose
    .connect(DB)
    .then(() => {
      console.log("SUCCESSFULLY CONNECTED TO DB".america);
    })
    .catch(() => {
      console.log("FAILED CONNECTED TO DB".red);
    });
};
export default ConnectDB;
