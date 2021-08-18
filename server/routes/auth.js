import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../model/user";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).json({ status: false, message: "All input is required" });
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5m",
        }
      );

      user.token = token;

      // user
      res.status(200).json({ status: true, user });
    }
    res.status(400).json({ status: false, message: "Invalid Credentials" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
