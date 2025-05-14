const { v4: uuidv4 } = require('uuid')

let characters = [] //temporary storage

const createCharacter = (req, res) => {
    const { userId, name, classType } = req.body;

    if (!userId || !name || !classType) {
        return res.status(400).json({message: 'Missing required fields'})
    }

    const character = {
        id: uuidv4(),
        userId,
        name,
        class: classType,
        level: 1,
        hp: 100,
        gold: 0,
        inventory: [], 
    }

    characters.push(character);
    res.status(201).json({message: 'Character created', character})
};

module.exports  = { createCharacter }