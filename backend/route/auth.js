const express = require('express')
const router = express.Router()
const {register, login} = require('../collector/userCollerction')
const {getAllNotes, deleteNote, editNote, createNote, singleNote} = require('../collector/noteCollector')
const auth = require('../authMiddleware/middleware')

//user auth
router.post('/register',register)
router.post('/login',login)

//note curd 
router.get('/notes',auth,getAllNotes)
router.get('/notes/:id',auth,singleNote)
router.post('/notes',auth, createNote);
router.put('/notes/:id',auth, editNote)
router.delete('/notes/:id',auth, deleteNote)

module.exports = router