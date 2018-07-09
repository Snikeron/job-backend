const mongoose = require('../db/connectdb')
const {Schema} = mongoose

const jobSchema = new Schema({
    title: { 
        type: String,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    }
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job 

