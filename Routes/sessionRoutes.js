const express = require('express');
const router = express.Router();

const createSession = require('../controller/createSession');
const updateSession = require('../controller/updateSession');

router.route('/add/:id')
        .post(createSession)
        //.patch(updateSession)
    

module.exports = router;