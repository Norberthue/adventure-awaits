const express = require('express');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// In-memory user store (for now)
const users = [];
console.log(users, '===users in auth.js')

router.post('/register', async (req, res) => {
  const { email, name, password , classType, image} = req.body;
  const id = uuidv4();
  if (!email || !name || !password || !classType || !image) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id,
    email,
    name,
    password: hashedPassword,
    character : {
        userId: id,
        name,
        class: classType,
        image,
        hp:0,
        level: 1,
        vitality: 5,
        strength: 5,
        dexterity: 5,
        intelligence: 5,
        luck: 5,
        armor: 5,
        gold: 70,
        experience:0,
        inventory: {
          weapon: {
            name: 'Wooden Sword',
            img: './assets/weapons/Icon28_16.png',
          }
      }, 
    }
  };

  users.push(newUser);
  res.status(201).json({ message: 'User registered', newUser });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required.' });
  }

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid password.' });
  }

  res.json({ message: 'Login successful', user});
});

module.exports = router;
