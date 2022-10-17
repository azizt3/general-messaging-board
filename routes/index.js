var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello Friends!",
    user: "Tabbish",
    added: new Date()
  },
  {
    text: "Good Day, good morning, goodnight!",
    user: "Kanye",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'General Message Board!', messages: messages});
});

router.post('/new', (req, res, next)=> {
  const newMessage = {
    title: req.body.title,
    description: req.body.description,
    username: req.body.username,
    date: new Date()
  };

  messages.unshift(newMessage)
  res.redirect('/')
});

module.exports = router;
