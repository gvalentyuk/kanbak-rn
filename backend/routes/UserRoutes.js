const { Router } = require("express");
const { register, login } = require('../controllers/UserController');
const router = Router();

router.route('/registration').post(register);
router.route('/login').post(login);

module.exports = router;
