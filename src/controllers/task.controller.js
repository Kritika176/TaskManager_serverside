const express = require("express");
const router = express.Router();
const Task = require("../models/task.model");

router.post("", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(200).send(task);
  } catch (err) {
    res.send.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const task = await Task.find({ userId: req.query.userId });
    return res.status(200).send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    return res.status(200).send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
