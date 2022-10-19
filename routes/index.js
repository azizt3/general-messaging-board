var express = require('express');
var router = express.Router();

// Existing messages, new messages will be pushed into this array
const messages = [{
    text: "Hello Friends!",
    user: "Tabbish Aziz",
    added: new Date().toLocaleString()
  },
  {
    text: "Good Day, good morning, goodnight!",
    user: "Kanye West",
    added: new Date().toLocaleString()
  },
  {
    text: "Luke I am your father",
    user: "Darth Vader",
    added: new Date().toLocaleString()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'General Message Board!', messages: messages});
});

//Takes the contents of the form submission and pushes them into message array.
router.post('/new', (req, res, next)=> {
  messages.push ({
    text: req.body.message,
    user: req.body.username,
    date: new Date().toLocaleString()
  });

 //inserts new elements at the start of the array  
  messages.unshift()
  res.redirect('/')
});

module.exports = router;
