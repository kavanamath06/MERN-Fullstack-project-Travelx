const router = require("express").Router();
const Booking = require("../models/Booking");

// CREATE BOOKING
router.post("/create", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    res.json("Booking successful");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// GET USER BOOKINGS
router.get("/:userId", async (req, res) => {
  try {
    const data = await Booking.find({ userId: req.params.userId });
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;