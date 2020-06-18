const express = require("express");
const router = express.Router();
const passport = require("passport");
const Profile = require("../../models/Profile");

router.get("/:user_id", (req, res) => {
    Profile
        .findOne({ user: req.params.user_id })
        .then(profile => res.status(200).json(profile))
        .catch(err => res.status(400).json(err));
});

router.post("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const newProfile = new Profile({
            user: req.user.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });

        newProfile.save().then(profile => res.json(profile))
}); 

router.patch("/:user_id", (req, res) => {
    Profile
        .findOneAndUpdate({ user: req.params.user_id }, {$set: { firstName: req.body.firstName, lastName: req.body.lastName}})
        .then((profile) => res.status(200).json(profile))
        .catch(err => res.status(400).json(err))
});

module.exports = router;