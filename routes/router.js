import express from "express";
import bcrypt from "bcrypt";
import User from "../model/Users.js";
const router = express.Router();
//-------------SignUP/Register---------------//
router.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password, cpassword } = req.body;
  console.log(firstname, lastname, email, password, cpassword);
  try {
    if (!firstname || !lastname || !email || !password || !cpassword)
      return res.status(401).send({ message: "Plz fill all details" });
    if (password !== cpassword)
      return res.status(401).send({ message: "password must matched" });
    const user = await User.findOne({ email });
    if (user) return res.status(401).send({ message: "User already exist" });
    const hashpass = await bcrypt.hash(password, 12);
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashpass,
      cpassword: hashpass,
    });
    await newUser.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Something went wrong" });
  }
});
//-------------login---------------//
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res.status(401).send({ message: "Plz fill all details" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).send({ message: "User not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = await user.generateAuthToken();
      console.log(token);
      res.status(401).send({ message: "token generated", token });
    } else {
      res.status(401).send({ message: "invalid creds pass" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Something went wrong" });
  }
});
//-------------Home---------------//
router.get("/home", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
});
export default router;
