const { authenticateToken } = require("../helpers/jwt");

exports.authenticate = (req, res, next) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized: Missing or invalid token" });
    }

    const token = req.headers.authorization.split(" ")[1];
    const isTokenAuthentic = authenticateToken(token);

    if (!isTokenAuthentic) {
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
  next();
};
