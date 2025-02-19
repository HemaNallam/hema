const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
require("dotenv").config();
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Enable CORS for all origins (Allow frontend to access API)
app.use(cors());

// Restrict CORS to a specific frontend (Optional)
// app.use(cors({ origin: "http://localhost:3000" })); // Change to your frontend URL

app.use(express.json()); // Middleware to parse JSON request bodies

// Register the task routes under the /api path
app.use('/api', taskRoutes);

// Debugging: Log MongoDB URI
console.log("MongoDB URI:", process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
