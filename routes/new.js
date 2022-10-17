const express = require('express');
const router = express.Router();

// Router.get() function which will point to a form so new messages can be submitted.
router.get('/', (req, res, next)=> {
    res.render('form');
});

module.exports = router;