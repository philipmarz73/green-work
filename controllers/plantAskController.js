const express = require("express");
const router = express.Router();
const PlantAsk = require("../models/plantAsk");

router.get("/", (req, res) => {
PlantAsk.find()
    .then((plants) => {
        res.json(plants);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).end();
    });

});
router.post("/", (req, res) => {
    console.log(req.body);
    PlantAsk.create(req.body).then((newPlant) => {
        console.log(newPlant);
        res.json(newPlant);

    });

});
module.exports = router;