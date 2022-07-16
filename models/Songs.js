const mongoose=require('mongoose')
const Schema= mongoose.Schema
const SongsSchema= new Schema({
    name: String,
    singers: [{
        type: String
    }],
    genre: [{
        type: String
    }],
    album: String,
    rating: Number,
    url: String

})
module.exports =Songs=mongoose.model('songs',SongsSchema)