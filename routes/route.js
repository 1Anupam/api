const express = require("express");
const Model = require("../models/model");
const router = express.Router();
const userModel = require("../models/usersmodel");
const testModel = require('../models/testModel');



router.get("/problems", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/users", async (req, res) => {
  try {
    const data = await userModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/tests", async (req, res) => {
  try {
    const data = await testModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send(req.params.id);
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})



module.exports = router;
