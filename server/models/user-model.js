const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Email validation regex
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    const saltRound = 10;
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
    next();
  } catch (error) {
    console.error("Error hashing password:", error);
    next(error);
  }
});
//compare the password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generate JWT
userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY || "default_secret_key",
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error("Error generating token:", error);
    return null;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
