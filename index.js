require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/TodoRoutes');

const app = express();


// MIDDLEWARE
app.use(cors());
app.use(express.json());


// ROUTES
app.use('/api', todoRoutes);


// HOME ROUTE
app.get('/', (req, res) => {
    res.send('Todo API Running');
});


// CONNECT DATABASE
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB Connected');

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });

})
.catch((err) => {
    console.log(err);
});