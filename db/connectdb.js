const mongoose = require('mongoose')

const url = 'mongodb+srv://cluster0-p2gjx.mongodb.net/'
const options = {
    user: 'daulagala',
    pass: process.env.MONGODB_USER_PASSWORD,
    dbName: 'Cluster0',
    promiseLibrary: global.Promise
}

mongoose.connect(url, options)
    .then(() => {
        console.info(
            'mongodb db connection established'
        )
    })
    .catch(err => {
        console.error(
            `mongodb db failure: ${err.message}`
        )
    })

module.exports = mongoose