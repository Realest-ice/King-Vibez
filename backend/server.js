require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const authRoutes = require('./routes/auth');
const songRoutes = require('./routes/songs');
const uploadRoutes = require('./routes/upload');
const aboutRoutes = require('./routes/about');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/about', aboutRoutes);

app.get('/', (req, res) => res.json({ ok: true, name: 'king-vibez-backend' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
