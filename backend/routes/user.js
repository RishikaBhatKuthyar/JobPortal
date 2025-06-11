const cors = require('cors');

const express = require("express");
const User = require("../model/users.model"); 
const bcrypt = require("bcrypt");
const multer = require('multer');
const path = require('path');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Job = require('../model/job.model');


// Setup for image upload using Multer
const storage = multer.diskStorage({
    destination: './public/images/',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const isValidType = allowedTypes.test(path.extname(file.originalname).toLowerCase()) && allowedTypes.test(file.mimetype);
    cb(null, isValidType ? true : cb(new Error('Only JPEG, PNG, and GIF files are allowed')));
};

const upload = multer({
    storage,
    limits: { fileSize: 1000000 }, // 1MB limit
    fileFilter
});

// Create a new user
router.post("/user/create", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ isSuccess: true, message: "User created successfully" });
    } catch (error) {
        res.status(400).json({ isSuccess: false, error: error.message });
    }
});



//login
// router.post("/login", async (req, res) => {

//     const { fullname, password } = req.body; 
//     try {
//         const user = await User.findOne({ fullname });
//         if (!user) {
//             return res.status(404).json({ isSuccess: false, message: "User not found" });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ isSuccess: false, message: "Invalid credentials" });
//         }
//         const token = jwt.sign({ user: user }, 'your_secret_key', { expiresIn: '1h' });

//         const isAdmin = user.type === 'admin';
//         res.status(200).json({ isSuccess: true, message: "Successfully logged in" });
//     } catch (error) {
//         res.status(500).json({ isSuccess: false, error: error.message });
//     }
// });
router.post("/login", async (req, res) => {
    const { fullname, password } = req.body; 
    try {
        const user = await User.findOne({ fullname });
        if (!user) {
            return res.status(404).json({ isSuccess: false, message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ isSuccess: false, message: "Invalid credentials" });
        }
        
        // Generate JWT token
        const token = jwt.sign({ user: user }, 'your_secret_key', { expiresIn: '1h' });

        // Include isAdmin check (if needed in your token or for other uses)
        const isAdmin = user.type === 'admin';

        // Modify your response to include the token
        res.status(200).json({ isSuccess: true, message: "Successfully logged in", token: token, userRole:user.type });
    } catch (error) {
        res.status(500).json({ isSuccess: false, error: error.message });
    }
});




// Update user details
router.put('/user/edit/:email', async (req, res) => {
    const { email } = req.params;
    let updates = req.body;

    if (updates.email) {
        return res.status(400).json({ isSuccess: false, message: "Updating the email is not allowed." });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ isSuccess: false, message: "User not found" });
        }

        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
        }

        await User.findOneAndUpdate({ email }, updates, { new: true });
        res.json({ isSuccess: true, message: "User details updated successfully." });
    } catch (error) {
        res.status(500).json({ isSuccess: false, error: error.message });
    }
});

// Delete a user
router.delete('/user/delete/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const result = await User.findOneAndDelete({ email });
        if (!result) {
            return res.status(404).json({ isSuccess: false, message: "User not found" });
        }
        res.json({ isSuccess: true, message: "User deleted successfully." });
    } catch (error) {
        res.status(500).json({ isSuccess: false, error: error.message });
    }
});

// Retrieve all users
router.get('/user/getAll', async (req, res) => {
    try {
        const users = await User.find({}, 'fullname email type -_id'); 
        res.json({ isSuccess: true, data: users });
    } catch (error) {
        res.status(500).json({ isSuccess: false, error: error.message });
    }
});

// Upload Image
router.post('/user/uploadImage', upload.single('image'), (req, res) => {
    if (req.file) {
        res.json({
            isSuccess: true,
            message: 'File uploaded successfully!',
            path: `images/${req.file.filename}`
        });
    } else {
        res.status(400).json({ isSuccess: false, message: 'No file selected or invalid file type' });
    }
});

//fetching all job listings
router.get('/get/jobs', async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.json({ isSuccess: true, data: jobs });
    } catch (error) {
        res.status(500).json({ isSuccess: false, error: error.message });
    }
});

router.post('/create/job', async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json({ isSuccess: true, message: "Job created successfully", data: job });
    } catch (error) {
        res.status(400).json({ isSuccess: false, error: error.message });
    }
});

module.exports = router;
