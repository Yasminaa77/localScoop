// require
const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
const crypto = require('crypto')
const db = require("../fake-db");
const router = express.Router();
// const axios = require('axios')



/* Global Variables */

// GET /follow_business/follow_business
router.get("/follow_business_1", (req, res) => {
    res.render("follow_business/follow_business_1")
})








module.exports = router;