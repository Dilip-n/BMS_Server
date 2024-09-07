const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {

    try {
        console.log("auth middleware");
        console.log("headers", req.headers.authorization); // Bearer asdas123123.asdasd123.asgfad124
        const token = req.headers.authorization.split(" ")[1];
        console.log("token", token);
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = verifiedToken.userId;
        next();
    } catch (error) {
        res.status(400).json({success:false,message: error.message || "Invalid Token"})
    }
   
}
module.exports = auth;