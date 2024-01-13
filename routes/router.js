import express from "express";
import bcrypt from "bcrypt";
import User from "../model/Users.js";
import auth from "../middleware/auth.js";
const router = express.Router();
//-------------SignUP/Register---------------//
router.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password, cpassword } = req.body;
  console.log(firstname, lastname, email, password, cpassword);
  try {
    if (!firstname || !lastname || !email || !password || !cpassword)
      return res
        .status(401)
        .send({ message: "Plz fill all details", code: 401 });
    if (password !== cpassword)
      return res
        .status(401)
        .send({ message: "password must matched", code: 401 });
    const user = await User.findOne({ email });
    if (user)
      return res.status(401).send({ message: "User already exist", code: 401 });
    const hashpass = await bcrypt.hash(password, 12);
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashpass,
      cpassword: hashpass,
    });
    await newUser.save();
    res.status(201).send({ message: "User registered successfully", newUser });
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Something went wrong", code: 501 });
  }
});
//-------------login---------------//
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res
        .status(401)
        .send({ message: "Plz fill all details", code: 401 });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).send({ message: "User not exist", code: 401 });

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = await user.generateAuthToken();
      console.log(token);
      res
        // .status(201)
        // .send({ message: "token generated", token: token })
        .cookie("token", token, {
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
        });
    } else {
      res.status(401).send({ message: "invalid creds pass", code: 401 });
    }
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Something went wrong", code: 501 });
  }
});

//-------------About---------------//
router.get("/about", auth, async (req, res) => {
  res.send(req.rootUser);
});

//-------------Home---------------//
router.get("/about", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
});
export default router;
