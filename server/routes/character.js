const express = require('express')
const router = express.Router()
const { createCharacter } = require('../controllers/characterController')

router.post('/create', createCharacter);

module.exports = router