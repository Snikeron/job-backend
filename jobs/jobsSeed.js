const Job = require('./Job')

const jobs = [
    {
        title: "junior developer",
        description: "We are looking for someone who can work well with a small, close-knit team of unique individuals in the heart of Sydney. Someone with great written and oral communication skills that is able to work autonomously.  The focus is to manage and improve our eCommerce websites, perfect UX and produce high quality, tested and working code with an overall goal of increasing online sales."
    },
    {
        title:"Junior Developer - React.js ",
        description:"We are seeking a self- starter who is passionate about development and thrives in an environment where the opportunities (and rewards) to step up are abundant."
    },
    {
        title:"Graduate / Junior Developer",
        description:"Clearbox Systems is a pioneering software engineering firm. We design, develop and manufacture original software and hardware solutions to provide a flexible and unique response to our customer's needs."
    }
]

Job.create(jobs)
.then(()=> {
    console.log("seeded jobs")
})
