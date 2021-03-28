const { Router } = require('express');
const router = Router();
const vkapi = require('../models/vkapi');

const { token } = require('../config.json')


router.get('/', async (req, res) =>{

    res.render('index', {
        title: 'CurlyDev',
        style: 'home.css',
        isindex: true,
        dexter_vk: await vkapi(471030541),
        ostin_vk: await vkapi(508323024),
        gelshteyn_vk: await vkapi(379508731)
        
    });
});

router.get('/servers', async (req, res) =>{

    res.render('servers', {
        title: 'CurlyDev | Servers',
        style: 'server.css',
        isServers: true
    });
});

router.get('/skins', async (req, res) =>{

    res.render('osuskins', {
        title: 'CurlyDev | Osu!Skins',
        style: 'osuskins.css',
        isSkins: true,
        tokyo_skin: '/skins/Tokio.osk'
    });
});

module.exports = router