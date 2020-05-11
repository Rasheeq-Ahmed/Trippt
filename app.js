const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users")

const port = process.env.PORT || 5005;
app.listen(port, () => console.log(`Server is running on port ${port}`));




mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello World");
})    

app.use("/api/users", users);







