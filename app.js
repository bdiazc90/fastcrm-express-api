import express, { json } from "express"
import mongoose from "mongoose";
import morgan from "morgan";

import {checkIndexes} from "./models/templateModel.js"

import { templateRoutes } from "./routes/templateRoutes.js"

const app = express();

app.use(json());
app.use(morgan('dev')); 

const PORT = 5100;

(async () => {
    await process.loadEnvFile('.env');
})();

const mongodb_url = process.env.MONGODB_URL || '';

// Connect to MongoDB
mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('🟢 MongoDB connected'))
    .catch(err => console.log(err));

checkIndexes();

app.get("/", (req, res) => {
    return res.json({ message: "FastCRM Express API" })
})

app.use("/api/templates", templateRoutes);
// app.use("/api/users", userRoutes);


app.listen(PORT, () => console.log("🟢 Vivo en el puerto: " + PORT))