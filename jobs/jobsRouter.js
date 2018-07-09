const express = require('express')
const router = express.Router()
const Job = require('./Job')

router.get('/',(req,res)=>{
    Job.find()
    .then(jobs =>{
        res.status(200).json(jobs)
    })
    .catch(err => {
        throw new Error(err.message)
    })
})

module.exports = router
