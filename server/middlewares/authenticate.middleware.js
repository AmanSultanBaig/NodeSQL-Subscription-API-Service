const { authenticateToken } = require("../helpers/jwt");

exports.authenticate = async (req, res, next) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized: Missing or invalid token" });
    }

    const token = req.headers.authorization.split(" ")[1];
    const decodeToken = await authenticateToken(token);

    if (!decodeToken) {
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
    req.user = decodeToken;
    next();
};
