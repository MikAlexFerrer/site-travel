const router = require("express").Router();
const Hotel = require("../models/Hotel");

//CREATE HOTEL RESERVATION
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    console.log(savedHotel)
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE HOTEL RESERVATION
router.put("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (hotel.username === req.body.username) {
      try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedHotel);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE HOTEL RESERVATION
router.delete("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (hotel.username === req.body.username) {
      try {
        await hotel.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET HOTEL RESERVATION
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL HOTEL RESERVATION
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let hotels;
    if (username) {
        hotels = await Hotel.find({ username });
    } else {
        hotels = await Hotel.find();
    }
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;