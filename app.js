// Requires. \\
const express = require("express");
const app = express();
const path = require('path');
const mysql = require("mysql2");
const session = require("express-session");
require('dotenv').config();

// Session middleware. \\
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));

// Connection to database. \\
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.SECRET_SQL,
    database: "galaxy-e-commerce"
});
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to database: " + err.stack);
        return;
    }
    console.log("Connected to database.");
});
module.exports = connection;

// Path of static. \\
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Setting EJS view. \\
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Routes. \\
const admin = require("./routes/admin");
const public = require("./routes/public");
app.use("/admin", admin);
app.use("/public", public);

// Starting server. \\
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    console.log("To stop, press CTRL + C.");
});