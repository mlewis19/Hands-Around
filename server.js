require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');


const app = express();
const PORT = process.env.PORT || 5000;


// Connect to MongoDB
connectDB();


// Middleware
app.use(cors());
app.use(express.json());


// Static uploads folder
const uploadFolder = process.env.UPLOAD_FOLDER || 'uploads';
app.use('/' + uploadFolder, express.static(path.join(__dirname, uploadFolder)));


// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/ngos', require('./routes/ngos'));
app.use('/api/events', require('./routes/events'));


app.get('/', (req, res) => res.send('NGO Volunteer Backend is live'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));