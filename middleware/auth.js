import jwt from "jsonwebtoken";
import User from "../model/Users.js";

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const verifyToken = jwt.verify(token, process.env.SEC_KEY);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;
  } catch (error) {
    res.status(401).send({ message: "Unauthorize token", code: 401 });
    console.log(error);
  }
};
export default auth;
