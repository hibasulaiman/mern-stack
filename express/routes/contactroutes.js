const express= require ('express')
const router = express.router()
const contacts= require('../models/ContactModel')


router.get('/all',async (requestAnimationFrame, res)) => {
    try {
        const contacts = await Contacts.find()
        return res.status(200).json(contacts)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


router.post('/add', async (req, res) => {
    try{
        const newcontact = new Contacts(req.body)
        const {name, phone }
    }
})