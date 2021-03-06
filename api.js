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
    console.log("Access token exchange request for: " + code);

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
        console.log("Access token received");
        state.access_token = response.data.access_token;
        res.json({"Msg": "Access Token Saved"});
      })
      .catch(function (error) {
        res.json(error);
        console.log("Error with receiving access token");
      });
});

router.get("/data", (req, res) => {
    let resData = {
      "bishk": [],
      "bk": [],
      "kshe": [],
      "bhogra": [],
      "madhav": [],
      "sak": [],
      "vardy": []
    };

    /* Query each member's directory and store URL's in array */
    let bishkPromise = axios.get(`https://api.github.com/repos/tanayv/paprika/contents/public/paprika/public/bucket/bishk`, {
      headers: {
        Authorization: "token " + state.access_token
      }
    });/*.then((response) => {
      data.bishk = response
    }).catch((error) => {
      console.log("There was an error in getting data for bishk");
    });*/

    let bkPromise = axios.get(`https://api.github.com/repos/tanayv/paprika/contents/public/paprika/public/bucket/bk`, {
      headers: {
        Authorization: "token " + state.access_token
      }
    });

    let kshePromise = axios.get(`https://api.github.com/repos/tanayv/paprika/contents/public/paprika/public/bucket/kshe`, {
      headers: {
        Authorization: "token " + state.access_token
      }
    });

    let bhograPromise = axios.get(`https://api.github.com/repos/tanayv/paprika/contents/public/paprika/public/bucket/bhogra`, {
      headers: {
        Authorization: "token " + state.access_token
      }
    });

    let madhavPromise = axios.get(`https://api.github.com/repos/tanayv/paprika/contents/public/paprika/public/bucket/madhav`, {
      headers: {
        Authorization: "token " + state.access_token
      }
    });

    let sakPromise = axios.get(`https://api.github.com/repos/tanayv/paprika/contents/public/paprika/public/bucket/sak`, {
      headers: {
        Authorization: "token " + state.access_token
      }
    });

    let vardyPromise = axios.get(`https://api.github.com/repos/tanayv/paprika/contents/public/paprika/public/bucket/vardy`, {
      headers: {
        Authorization: "token " + state.access_token
      }
    });

    Promise.all([bishkPromise, bkPromise, kshePromise, bhograPromise, madhavPromise, sakPromise, vardyPromise]).then((values) => {
      
      /*for (let value of values)
        console.log(value.data || "data is undefined");*/

      resData.bishk = values[0].data;
      resData.bk = values[1].data;
      resData.kshe = values[2].data;
      resData.bhogra = values[3].data;
      resData.madhav = values[4].data;
      resData.sak = values[5].data;
      resData.vardy = values[6].data;
      
      res.json(resData);
    }).catch((error) => {
      console.log(error);
      res.json(error);
    });
    
})

router.post('/upload/:member/:count', upload.single('example'), (req, res, next) => {

    const member = req.params.member;
    const count = req.params.count;
    const encoded = Buffer.from(fs.readFileSync(req.file.path)).toString("base64");

    let payload = {
      "message": "File added using Paprika",
      "committer": {
        "name": "Tanay Vardhan",
        "email": "tvardha2@illinois.edu"
      },
      "content": encoded
    };
    let config = {
      headers: {
        Authorization: "token " + state.access_token,
      }
    }
    let path = `https://api.github.com/repos/tanayv/paprika/contents/public/paprika/public/bucket/${member}/${count}.png?client_secret=effd0f79f2737a8b2a008b250c029860b36fc380`;
    axios.put(path, payload, config)
      .then(function (response) {
        res.json({
          "member": req.params.member,
          "count": req.params.count,
          "gitHubResponse": response.data
        });
      })
      .catch(function (error) {
        res.json(error.response);
      });
  })


module.exports = router;