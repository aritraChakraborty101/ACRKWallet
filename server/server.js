
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
const ServerLog = require('./models/serverLog');
const app = express();
const PORT = 5000;
// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS to allow requests from React
app.use(express.json()); // Allow parsing of JSON bodies

// simple route
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the Express backend!" });
});

app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    try {
        await ServerLog.create({
            username: 'riadkabir45',
            message: 'server started',
            timestamp: new Date()
        });
        console.log('Server start log saved to DB');
    } catch (err) {
        console.error('Failed to save server start log:', err.message);
    }
});