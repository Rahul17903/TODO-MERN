const jwt = require('jsonwebtoken');
const User = require('../modules/User');
const dotenv = require('dotenv')
dotenv.config()

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // or: req.user = await User.findById(decoded.id);
        next();
    } catch (err) {
        return res.status(401).json({ message: "Token is not valid" });
    }
};

module.exports = auth;
