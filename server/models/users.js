const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname: { type: String },
    birthplace: { type: String },
    birthdate: { type: Date },
    address: { type: String },
    file: { type: String },
    mariagestatus: { type: String }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User