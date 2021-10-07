const Student = require("../models/student.model");
const express = require("express");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const item = await Student.create(req.body);
    res.status(201).json({ item });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.get("", async (req, res) => {
  const page = +req.query.page || 1;
  const size = 10;
  const offset = (page - 1) * size;
  console.log(req.query);
  try {
    if (req.query.filter) {
      //console.log(req.query.filter);
      var item = await Student.find({ gender: `${req.query.filter}` })
        .sort("age")
        .skip(offset)
        .limit(size)
        .lean()
        .exec();
    } else if (req.query.sort == "age") {
      //console.log(req.query.sort);
      var item = await Student.find().sort("age").skip(offset).limit(size).lean().exec();
    } else {
      var item = await Student.find().skip(offset).limit(size).lean().exec();
    }
    const totalDocuments = await Student.find().countDocuments();
    const totalPages = Math.ceil(totalDocuments / size);
    res.status(201).json({ item, totalPages });
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Student.findById(req.params.id).lean().exec();
    return res.status(201).json({ item });
  } catch (err) {
    res.status(400).json({ error: e });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const item = await Student.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
    return res.status(201).json({ item });
  } catch (err) {
    res.status(400).json({ error: e });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await Student.findByIdAndRemove(req.params.id);
    return res.status(201).json({ item });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
