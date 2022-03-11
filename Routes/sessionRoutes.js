const express = require('express');
const router = express.Router();

const createSession = require('../controller/createSession');
const updateSession = require('../controller/updateSession');

router.route('/add/:id')  // here I am giving my user ID 
        .post(createSession)

router.route('/update/:id')        // remember here I am giving my session ID
        .put(updateSession)
    

module.exports = router;