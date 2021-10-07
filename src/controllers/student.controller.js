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
  try {
    const item = await Student.find().lean().exec();
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Student.find({ "evaluation.eval_id": req.params.id }).lean().exec();
    return res.status(201).json({ item });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
