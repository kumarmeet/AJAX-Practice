const express = require("express");

const router = express.Router()

const usersData = [];

router.get("/", (req, res) => {
    res.render("index");
})

router.get("/user", (req, res) => {
    res.json(usersData);
})

router.post("/user-post", (req, res) => {
    const userData = {
        name: req.body.name,
        age: req.body.age,
        id: Math.random().toString()
    }

    usersData.push(userData);

    console.log(userData);

    res.json({message: "Post request handled by ajax"})

    // res.redirect("/")
})

module.exports = router;