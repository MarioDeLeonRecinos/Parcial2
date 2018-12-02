var express = require('express');
var router = express.Router();
const userController = require('../controllers/UserController');

router.get('/',userController.index);
router.get('/:id',userController.findUser);
router.post('/',userController.store);
router.put('/:id',userController.update);
router.delete('/:id',userController.delete);

module.exports = router;
