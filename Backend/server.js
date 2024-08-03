import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(join(__dirname, '../Frontend'))); // Serve the static files

app.get('/login', (req, res) => {
  res.send("go to /home");
});

// Define the route for /home
app.get('/home', (req, res) => {
  res.sendFile(join(__dirname, '../Frontend/html/index.html'));
});

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});