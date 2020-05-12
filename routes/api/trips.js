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

router.delete("/", (req, res) => {
    Trip
        .remove(res.json({message: 'DELETED TRIP'}))
        .catch(err => res.status(400).json(err))
}); 

router.post("/:location", 
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const newTrip = new Trip({
            user: req.user.id,
            location: req.params.location
        });

        newTrip.save.then(trip => res.json(trip))
}); 

module.export = router;
