// Dependencies
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const db = require('../models');
const passport = require('../config/passport');

// New User Sign-Up
router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  
  // Check if username already exists
  db.User.findOne({ username: username })
    .then((user) => {
      if (user) {
        res.json({
          userAlreadyExists: "Username is taken, please submit a new username."
        });
      } else {
        db.User.create({
          username: username,
          password: password
        }).then((dbUser) => {
          res.json(dbUser);
        }).catch((error) => {
          console.log(error);
        });
      }
    }).catch((error) => {
      console.log(error)
    });
});

module.exports = router;