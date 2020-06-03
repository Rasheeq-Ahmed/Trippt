const express = require("express");
const router = express.Router();
const passport = require("passport");
const Trip = require("../../models/Trip");

router.get("/user/:user_id", (req, res) => {
    Trip
        .find({user: req.params.user_id})
        .then(trips => res.json(trips))
        .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
    Trip
        .find(req.params.id)
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json(err))
});

router.delete("/:id", (req, res) => {
    Trip
        .findByIdAndDelete(req.params.id)
        .then(()=> res.status(200).json('Success'))
        .catch(err => res.status(400).json(err))
}); 

router.patch("/:id", (req, res) => {
    Trip
        .findByIdAndUpdate(req.params.id, {$push: {attractions: updateHash}})
        .then(()=> res.status(200).json('Success'))
        .catch(err => res.status(400).json(err))
});

router.post("/", 
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const newTrip = new Trip({
            user: req.user.id,
            location: req.body.location,
            locationId: req.body.locationId
        });

        newTrip.save().then(trip => res.json(trip))
}); 


module.exports = router;
