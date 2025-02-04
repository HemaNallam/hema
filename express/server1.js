const express = require('express');
const mongoose = require('mongoose');

const port = 3001;
const app = express();
app.use(express.json());

let users = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
];
 app.get('/users', (req, res) => {
    res.send(users);
}
);
mongoose.connect('mongodb://localhost:27017/', {useNewUrlParser: true, useUnifiedTopology: true});  
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

app.put('/users/:name', (req, res) => { 
    const user = users.find(user => user.name === req.params.name);
    user.age = req.body.age;
    res.send(user);
}
);


app.put('/users/:name', (req, res) => { 
    const user = users.find(user => user.name === req.params.name);
    user.age = req.body.age;
    res.send(user);
}
);


app.post('/users', (req, res) => {
    const user={
        name: req.body.name,
        age: req.body.age  
    }
    users.push(user);
    res.send(user);
}
);

app.delete('/users/:name', (req, res) => {  
    users = users.filter(user => user.name !== req.params.name);
    res.send(users);
}   
);

app.get('/', (req, res) => {
    res.send('Hello, World!');
}); 

app.get('/about', (req, res) => { 
    res.send('About Us');
}); 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});