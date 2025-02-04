const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes'); // Correct path to taskRoutes.js

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// Register the task routes under the /api path
app.use('/api', taskRoutes);


mongoose.connect('mongodb+srv://HemaNallam:hema2324@cluster0.2qbmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
