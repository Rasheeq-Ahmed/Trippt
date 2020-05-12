const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
<<<<<<< HEAD
const path = require('path')

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

=======
const path = require('path');

const users = require("./routes/api/users");
const trips = require("./routes/api/trips");
>>>>>>> 5a56c231dcbbd6100e6685114d058f26982d629d

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

<<<<<<< HEAD
// app.get("/", (req, res) => res.send("Hello World!!"));

=======
>>>>>>> 5a56c231dcbbd6100e6685114d058f26982d629d
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
<<<<<<< HEAD
=======
app.use("/api/trips", trips);
>>>>>>> 5a56c231dcbbd6100e6685114d058f26982d629d

const port = process.env.PORT || 5005;
app.listen(port, () => console.log(`Server is running on port ${port}`));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}





