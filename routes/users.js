var express = require('express');
var router = express.Router();
const userController = require('../controllers/UserController');

router.get('/',userController.index);
router.get('/:id',userController.findUser);
router.get('/',userController.store);
router.get('/:id',userController.update);
router.get('/:id',userController.delete);

module.exports = router;
