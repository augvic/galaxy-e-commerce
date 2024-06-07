// Requires. \\
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require("../app");

// Setting the account messages null as default. \\
account_create_sucess = "";
account_create_failed = "";
account_login = "";
loginFirst = "";

// Function to check if user is logged in before go to main. \\
function checkAuth (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        loginFirst = "Please, login first."
        res.redirect("/admin/login");
    }
}

// Body parser. \\
router.use(bodyParser.urlencoded({ extended: true }));

// Login page. \\
router.get("/login", (req, res) => {
    res.render("admin-login", {account_create_sucess, account_create_failed, account_login, loginFirst});
    account_create_sucess = "";
    account_create_failed = "";
    account_login = "";
    loginFirst = "";
});

// Register form. \\
router.post('/register-send', (req, res) => {
    const username = req.body["username-register"];
    const email = req.body["email-register"];
    const password = req.body["password-register"];
    const sql = `INSERT INTO admin-accounts (username, email, password) VALUES (?, ?, ?)`;
    connection.query(sql, [username, email, password], (error, results) => {
        if (error) {
            console.error('Error inserting data into database: ', error);
            account_create_failed = "User already registered.";
        } else {
            console.log('Data inserted successfully.');
            account_create_sucess = "Account created succesfully.";
        }
        res.redirect("/admin/login");
    });
});

// Login form. \\
router.post('/login-send', (req, res) => {
    const username = req.body["username-login"];
    const password = req.body["password-login"];
    const rememberMe = req.body["remember-me"];
    const sql = `SELECT * FROM admin-accounts WHERE username = ? AND password = ?`;
    connection.query(sql, [username, password], (error, results) => {
        if (error) {
            console.error('Error on login: ', error);
            account_login = "An error occurred during the login process.";
            res.redirect("/admin/login");
        } else {
            if (results.length > 0) {
                console.log("User logged succesfully.");
                req.session.user = {
                    username: results[0].username
                }
                if (rememberMe) {
                    req.session.cookie.maxAge = 7 * 24 * 60 * 60 * 1000;
                } else {
                    req.session.cookie.maxAge = false;
                }
                res.redirect("/admin/main");
            } else {
                account_login = "Invalid username or password.";
                res.redirect("/admin/login");
            }
        }
    });
});

// Admin main. \\
router.get("/main", checkAuth, (req, res) => {
    res.render("admin-main", {user: req.session.user});
});

// Export module. \\
module.exports = router;