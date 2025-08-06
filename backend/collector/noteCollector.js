const Note = require('../modules/Note')
const { findOneAndDelete } = require('../modules/User')

//All notes of the logged-in user 
const getAllNotes = async(req,res)=>{
    try {
        const notes = await Note.find({user: req.user.id}).sort({createAt:-1})
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

//get Single a note 

const singleNote = async(req,res)=>{
    try {
        const note = await Note.findOne({_id:req.params.id,user:req.user.id})
        if(!note) return res.status(400).json({error:"Note not found "})
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json("Server Error")
    }
}

//Create a note

const createNote = async(req,res)=>{
    try {
        const {title,content} = req.body;
        if(!title || !content) {
            res.status(400).json({error:"title or content missing "})
        }

        const note = new Note({title,content,user :req.user.id})
        await note.save()
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json("server error")
    }
}

// Edit a note 

const editNote = async(req,res)=>{
    try {
        const {title,content} = req.body;
        const note = await Note.findOneAndUpdate(
            {_id:req.params.id, user:req.user.id},
            {title,content},{new:true, runValidators:true}
        )
        if(!note) {
            return res.status(400).json("Note not found ")
        }
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json("Server Error")
    }
}

// Delete a note

const deleteNote = async(req,res)=>{
    try {
        const note = await Note.findOneAndDelete({_id:req.params.id, user:req.user.id})
        if(!note) return res.status(400).json("Note Not Found ")
        console.log(req.params.id, req.user.id)
        
            res.status(200).json({message:"Note Delete Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json("Server error")
    }
}

module.exports = {getAllNotes, deleteNote, editNote, createNote, singleNote}