import express from "express"

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    return res.json({message: "FastCRM Express API"})
})

app.listen(PORT, () => console.log("🟢 Vivo en el puerto: " + PORT))