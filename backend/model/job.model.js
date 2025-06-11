const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    companyName:{
        type: String,
        required: [true, 'Company Name is required']
    },
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    lastUpdated: {
        type: String,
        required: [true, 'Last updated date is required']
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required']
    },
    applyLink: {
        type: String,
        required: [true, 'Apply link is required']
    }
}, {
    timestamps: true 
});


const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
