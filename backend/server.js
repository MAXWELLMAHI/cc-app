const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
const result = dotenv.config();
if (result.error) {
    console.error("Error loading .env file:", result.error);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug environment variables
console.log('Environment Variables Status:');
console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
console.log('PORT exists:', !!process.env.PORT);

// MongoDB Connection
const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error('MONGODB_URI is missing from environment variables');
        }
        
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Server is working!' });
});

// Start server
const startServer = async () => {
    try {
        await connectDB();
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Server startup error:', error.message);
    }
};

startServer();