const express = require('express');
const User = require('../models/User');

// @desc: update user infomation on page user
exports.updateUserInformation = async(req,res,next) => {
    const {username,fullname, email, company, number, address} = req.body;
    try {
        let updatedUserInfo = {
            username,
            fullname,
            email,
            company,
            number,
            address,
        };
        const updateUserInfoCondition = {_id: req.userId};
        updatedUserInfo = await User.findOneAndUpdate(updateUserInfoCondition,updatedUserInfo, {new: true});
        if(!updatedUserInfo) res.status(401).json({ success: false, message: 'User not found'});
        res.json({success: true, message:"Edit user infomation successfull", user: updatedUserInfo});
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    };
};