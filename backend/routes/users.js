const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const authorization = require('../authorization')
router.get('/', userController.getUser );

router.post('/add/:photo', authorization.checkAuthenticated, userController.addPhoto );

router.post('/remove/:photo', authorization.checkAuthenticated, userController.removePhoto);

router.get('/photos', authorization.checkAuthenticated, userController.getUserPhotos)

module.exports = router;