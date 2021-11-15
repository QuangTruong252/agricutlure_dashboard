const User = require('../models/User');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

// Simple validation
exports.authRegister = async(req, res, next) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        return res.status(400).json({ success: false, message: 'Missing username,email and/or password' });
    };
    try {
        // check for existing user
        // logic: look in the database to see if there is this username, if so, then notify the user
        // If not, let the user use this username to register.
        const user = await User.findOne({ username: username });
        if (user) return res.status(400).json({ success: false, message: 'usernam already taken, please chose the difference username' });
        // logic: next, if username is confirmed, we will encoded password of user => security 
        // Use argon2 to hash password
        const hashedPassword = await argon2.hash(password);
        // Create new user and save to db
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,

        });
        await newUser.save();
        // Return token to auth
        console.log(newUser);
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET);
        res.json({ success: true, message: 'Created successful!!!', accessToken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

exports.authLogin = async(req, res, next) => {
    console.log(req.body);
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Missing username and/or password' });
    };
    try {
        // Check for existing user
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ success: false, message: 'Incorrect username or password ' });
        // Found User
        const passwordValid = await argon2.verify(user.password, password);
        if (!passwordValid) return res.status(400).json({ success: false, message: 'Incorrect username or password' });
        // All good
        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);
        res.json({ success: true, message: 'Login successful!!!', accessToken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

exports.authCheck = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if(!user) return res.status(400).json({success:false, message:'User not found'});
        res.json({success:true, user});
    } catch (error) {
        console.log(error);
       res.status(500).json({ success: false, message: "Internal server error" });
    }
};
