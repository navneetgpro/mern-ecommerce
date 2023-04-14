const express = require('express');
const connectDb = require('./config/server');
const cors = require('cors');
const app = express();

// connect db
connectDb();

// Configurations for "body-parser"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors allow
app.use(cors({
  origin:"http://localhost:5173"
}));

// access all static images
app.use('/images', express.static('images'));

app.get('/',(req,res) => {
    res.send('i am live from nodejs');
})

// Define routes
app.use('/api/product',require('./routes/api/product'));
app.use('/api/user',require('./routes/api/user'));
app.use('/api/auth',require('./routes/api/auth'));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log("Server is up listening on port:" + port);
});

