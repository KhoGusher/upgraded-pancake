import mongoose from "mongoose";
const URI = process.env.URI;

const dbConn = mongoose.connect(URI!);

export { dbConn };
