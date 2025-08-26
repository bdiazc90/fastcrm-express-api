import express, { json } from "express"
import mongoose from "mongoose";

import { templateRoutes } from "./routes/templateRoutes.js"

const app = express();

app.use(json);

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

app.get("/", (req, res) => {
    return res.json({ message: "FastCRM Express API" })
})

app.use("/api", templateRoutes);

app.listen(PORT, () => console.log("🟢 Vivo en el puerto: " + PORT))