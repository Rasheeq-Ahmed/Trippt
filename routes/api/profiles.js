const express = require("express");
const router = express.Router();
const passport = require("passport");
const Profile = require("../../models/Profile");

router.get("/:user_id", (req, res) => {
    Profile
        .findOne({ user: req.params.user_id })
        .then(profile => {
            if (profile) {
                res.status(200).json(profile)
            } 
        }) 
        .catch(err => res.status(400).json(err));
});

router.post("/",
    passport.authenticate("jwt", { session: false }), (req, res) => {
        Profile
            .findOne({user: req.user.id})
            .then( profile => {
                if (profile) {
                    return res.status(400).json("You already created a profile")
                } else {
                    
                    const newProfile = new Profile({
                        user: req.user.id,
                        handle: req.user.handle,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        about: req.body.about
                    })
                    newProfile.save().then(profile => res.json(profile))
                }           
    });
}); 

router.patch("/:user_id", (req, res) => {
    Profile
        .findOneAndUpdate({ user: req.params.user_id }, {$set: { firstName: req.body.firstName, lastName: req.body.lastName}})
        .then((profile) => res.status(200).json(profile))
        .catch(err => res.status(400).json(err))
});

module.exports = router;