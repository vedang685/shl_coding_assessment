const express = require("express")
const demoData  = require("./dataController") ;
const router = express.Router();

router.get('/data', demoData);
module.exports = router;