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
    console.log(code);
    /*axios.post()
    axios.post("https://github.com/login/oauth/access_token", {
        "client_id": "Iv1.ab929d25982c75d7",
        "client_secret": "effd0f79f2737a8b2a008b250c029860b36fc380",
        "client_code": code,
    }, (response) => {
        console.log("Response: ", response);
        res.json(response);
    }, (error) => {
        console.log("Error: ", error);
        res.json(error);
    } );*/

    axios.post('/auth', {
        "client_id": "Iv1.ab929d25982c75d7",
        "client_secret": "effd0f79f2737a8b2a008b250c029860b36fc380",
        "client_code": code,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      res.json({
          "request made": "check logs for response"
      });
});


module.exports = router;