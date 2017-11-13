const router = require('express').Router();
const bodyParser = require('body-parser');
const api = require('../config.js');
const rp = require('request-promise');

router.post('/', (req, res) => {
  console.log('in server with request', req.body)
  let options = {
    uri: `http://api.petfinder.com/pet.find?key=${api.API_KEY}&animal=dog&size=${req.body.size}&sex=${req.body.gender}&location=${req.body.zip}&output=full&format=json`,
    json: true
  }
  rp(options)
    .then((data) => {
      res.send(data.petfinder.pets.pet);
    })
    .catch((err) => {
      console.log('error reaching pet finder', err);
    })
})

module.exports = router;
