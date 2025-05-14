const express = require('express');
const cors = require('cors');
const app = express();

// Import route files
const authRoutes = require('./routes/auth');

// Middleware
app.use(cors()); // Allow requests from frontend (e.g., localhost:5173)
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use(authRoutes); // e.g., /register, /login


// Root route (optional)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
