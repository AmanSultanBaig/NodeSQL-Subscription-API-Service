const { authenticateToken } = require("../helpers/jwt");

let tokenBlacklist = [];

const authenticate = async (req, res, next) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized: Missing or invalid token" });
    }

    const token = req.headers.authorization.split(" ")[1];
    const decodeToken = await authenticateToken(token);
    
    if (tokenBlacklist.includes(token)) {
        return res.status(401).json({ message: 'Token revoked' });
    }

    if (!decodeToken) {
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
    req.user = decodeToken;
    next();
};

module.exports = { authenticate, tokenBlacklist}
