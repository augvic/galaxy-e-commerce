// Requires. \\
const express = require('express');
const router = express.Router();

// Login route. \\
router.get("/main", (req, res) => {
    res.render("public-main");
});

// Export module. \\
module.exports = router;