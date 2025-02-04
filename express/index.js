const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// File where user data is stored
const USER_FILE = 'users.json';

// Helper function to read users from JSON file
function readUsers() {
    if (!fs.existsSync(USER_FILE)) {
        fs.writeFileSync(USER_FILE, JSON.stringify([]));
    }
    const data = fs.readFileSync(USER_FILE);
    return JSON.parse(data);
}

// Helper function to write users to JSON file
function writeUsers(users) {
    fs.writeFileSync(USER_FILE, JSON.stringify(users, null, 2));
}

// POST endpoint for signup
app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    // Basic validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required!' });
    }

    const users = readUsers();

    // Check if user already exists
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'Username already exists!' });
    }

    // Add new user
    users.push({ username, password });
    writeUsers(users);

    res.status(201).json({ message: 'User registered successfully!' });
});

// GET endpoint for sign-in
app.get('/signin', (req, res) => {
    const { username, password } = req.query;

    // Basic validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required!' });
    }

    const users = readUsers();

    // Check if user exists and password matches
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        return res.status(200).json({ message: 'Sign-in successful!' });
    } else {
        return res.status(401).json({ message: 'Invalid username or password!' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

