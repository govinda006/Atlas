const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to GECCIA Canteen by Atlas Groups.");
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error!" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hash_password,
    });

    const token = jwt.sign(
      {
        userId: userCreated._id.toString(),
        email: userCreated.email,
        isAdmin: userCreated.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "30d" }
    );

    res.status(201).json({
      msg: "Registration Successful",
      token,
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json({ msg: "Internal server error" });
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await userExist.comparePassword(password);

    if (!isMatch) {
      const token = jwt.sign(
        {
          userId: userExist._id.toString(),
          email: userExist.email,
          isAdmin: userExist.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        msg: "Login Successful",
        token,
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

module.exports = { home, register, login };
