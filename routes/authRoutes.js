const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get('/',authController.index);
router.get('/adduser/',authController.userForm)
router.post('/save/',authController.save)
router.get('/editUser/:id',authController.editForm)
router.post('/update/:id',authController.update)
router.get('/deleteUser/:id',authController.Delete)


module.exports = router;



