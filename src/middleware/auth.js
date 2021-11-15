// @desc middleware will check if the user is valid, it will allow user
// go route /post. Else it will block => we use token which we provided for user

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Get header of req, it like: Authorization: Beare sadawdadasdadadasdwga213 => token is sada...
    const authHeader = req.header('Authorization');
    // Mean: if have not authHeader, return false, else cut authHeader with ' ' and get element 1 
    const token = authHeader && authHeader.split(' ')[1];
    console.log('token: ' + token);
    if (!token) res.status(401).json({ success: false, message: 'Access token not found!' });
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // Assigned for req to use auth
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({ success: false, message: 'Invalid token' });
    };
};

module.exports = verifyToken;