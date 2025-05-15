const express = require('express');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// In-memory user store (for now)
const users = [];

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
        level: 1,
        vitality: 10,
        strength: 20,
        dexterity: 30,
        intelligence: 40,
        luck: 50,
        armor: 60,
        gold: 70,
        inventory: [], 
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
