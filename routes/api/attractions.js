const express = require("express");
const router = express.Router();
const passport = require("passport");
const Attraction = require("../../models/Attraction");

router.get("/:trip_id", (req, res) => {
    Attraction
        .find(req.params.trip_id)
        .then(attractions => res.status(200).json(attractions))
        .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
    Attraction
        .find(req.params.id)
        .then(attraction => res.status(200).json(attraction))
        .catch(err => res.status(400).json(err))
});

router.delete("/:id", (req, res) => {
    Attraction
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('Success'))
        .catch(err => res.status(400).json(err))
}); 

router.post("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const newAttraction = new Attraction({
            user: req.user.id,
            trip: req.trip.id,
            location: req.body.location,
            locationId: req.body.locationId,
            locationImg: req.body.locationImg
        });

        newAttraction.save().then(attraction => res.status(200).json(attraction))
    });



module.exports = router;