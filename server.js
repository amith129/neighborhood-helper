const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
const postRoutes = require('./routes/postRoutes');
app.use('/api/posts', postRoutes);


// Routes
app.get('/', (req, res) => {
  res.send('Neighborhood Helper Backend Running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
