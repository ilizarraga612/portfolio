
import express from"express";
import bodyParser from "body-parser";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const PORT = 8001;

// Middleware
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://143.198.79.177:8001/`);
});
