const router = require('express').Router();

let {house} = require('../../controllers');
let {houseMiddleware} = require('../../middleware');

router.post('/houses', houseMiddleware.checkHouseValidMiddleware, house.createHouse);

router.get('/houses/:house_id', houseMiddleware.isHousePresent, house.getHouse);
router.get ('/houses', house.findAllHouses);
router.patch('/houses/:house_id', houseMiddleware.isHousePresent, house.updateHouse)

module.exports = router;