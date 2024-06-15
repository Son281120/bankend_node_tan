import express from "express";
import connectToDb from "./database/index.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({
  origin: "*"
}));
app.use('/api', router);
const PORT = 4000;

connectToDb();

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
