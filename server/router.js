const router = require('express').Router();
const bodyParser = require('body-parser');

router.post('/', (req, res) => {
  console.log('i am in the router', req.body)
})

module.exports = router;
