const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {
    type:String,
    required:true,
    trim:true
},
email:{
type:String,
required:true,
trim:true
},
phone:{
    type:String,
    required:true,
    trim:true
},
place:{
    type:String,
    required:true,
    trim:true
},
message:{
    type:String,
    required:true,
    trim:true
}
})

module.exports =mongoose.model('Contact',contactSchema)