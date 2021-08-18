import express from "express";
import auth from "../middleware/auth";
import User from "../model/user";

const router = express.Router();

/* GET users listing. */
router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ status: true, users });
  } catch (error) {
    res.status(400).json({ status: false, message: "An error occured." });
  }
});

/* UPDATE user. */
router.put("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;

    const cUser = await User.findOne({ _id: userId });
    if (cUser) {
      const { first_name, last_name, title, lat, lng } = req.body;
      const body = {};
      const address = {};
      if (first_name) {
        body.first_name = first_name;
      }
      if (last_name) {
        body.last_name = last_name;
      }

      address.title = title || cUser.address.title;
      address.lat = lat || cUser.address.lat;
      address.lng = lng || cUser.address.lng;

      body.address = address;

      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $set: body },
        { new: true }
      );
      res.status(200).json({ status: true, user });
    } else {
      res.status(400).json({ status: false, message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: "An error occured." });
  }
});

module.exports = router;
