const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        "api_version": "1.0.0"
    });
})


router.get("/auth", (req, res) => {
    const code = req.query.code;
    axios.post("https://github.com/login/oauth/access_token", {
        "client_id": "Iv1.ab929d25982c75d7",
        "client_secret": "effd0f79f2737a8b2a008b250c029860b36fc380",
        "client_code": code,
    }, (respone) => {
        console.log("Response: ", response);
        res.json(response);
    }, (error) => {
        console.log("Error: ", error);
        res.json(response);
    } );
});


module.exports = router;