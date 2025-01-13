import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const PORT = 3000;

// Middleware
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // serve static files

// Serve home.html on the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
