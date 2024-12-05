import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/userRoute.js";


const app = express();

// Koneksi ke MongoDB
const urlDatabase = "mongodb://127.0.0.1:27017/test-language-center";
mongoose.connect(urlDatabase)
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.error("Database connection failed:", err);
    });

// Middleware
app.use(cors());
app.use(express.json());
app.use(UserRoute);

// Menjalankan server
app.listen(5000, () => {
    console.log("Server is running on port 5000...");
});
