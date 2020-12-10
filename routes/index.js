const express = require('express');
const useragent = require('express-useragent');

const minecraftServerUtil = require('minecraft-server-util');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    minecraftServerUtil.status("play.boredommc.com")
        .then((response) => {
            res.render('index', { players: response.onlinePlayers, mobile: useragent.isMobile});
        });
});

module.exports = router;