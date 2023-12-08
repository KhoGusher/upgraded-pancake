import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();
import { dbConn } from "./src/services/database";

const PORT = process.env.PORT;

const start = async () => {
  try {
    dbConn;

    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
