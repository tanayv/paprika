const axios = require("axios");
const express = require("express");
const router = express.Router();
const state = {
    access_token: ""
};
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require("fs");

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

    let config = {
        headers: {
          Accept: "application/json",
        }
      }

    axios.post("https://github.com/login/oauth/access_token", {
        "client_id": "Iv1.ab929d25982c75d7",
        "client_secret": "effd0f79f2737a8b2a008b250c029860b36fc380",
        "code": code,
      }, config)
      .then(function (response) {
        console.log("Trimm", response.data.toString().substring(13,55));
        res.json({"hello": ""+response.data});
      })
      .catch(function (error) {
        res.json(error);
        console.log(error);
      });

      
});

router.post('/upload', upload.single('example'), (req, res, next) => {
    // req.file is the `example` file or whatever you have on the `name` attribute: <input type="file" name="example" />
    // I believe it is a `Buffer` object.
    const encoded = new Buffer(fs.readFileSync(req.file.path)).toString("base64")
    console.log(encoded);
    res.json(encoded);
  })


module.exports = router;