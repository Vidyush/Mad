const express = require('express');
const router  = express.Router();
const votingController = require('../controllers/votingController');

router.get('/',votingController.index);
router.get('/addform/',votingController.addform);
router.post('/add',votingController.save)

module.exports = router;