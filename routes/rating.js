const router = require('express').Router();
const ratingController = require('../controllers/ratingController');
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

router.post("/",verifyTokenAndAuthorization, ratingController.addRating);

//router.post("/", ratingController.addRating);

router.get("/",verifyTokenAndAuthorization, ratingController.checkUserRating);

//router.get("/", ratingController.checkUserRating);

module.exports = router;