const jwt = require("jsonwebtoken");
const User = require('../models/user')

exports.isAuth = (req, res, next) => {
  console.log(req.headers.authorization);

  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decode.userId);
    if(!user){
        return res.json({success: false, message: "unauthorized access!" })
    }
    req.user = user
    next()
  } else {
    res.json({ success: false, message: "unauthorized access!" });
  }
};
