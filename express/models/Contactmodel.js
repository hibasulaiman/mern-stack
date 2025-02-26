const mongoose = require('mongoose')

const contactModel = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    phone: {
        type: Number,
        required: true
    }
})

const contacts = mongoose.model("Contacts", contactModel)
module.exports = contacts