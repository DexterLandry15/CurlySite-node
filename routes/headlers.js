const { Router } = require('express')
const router = Router()

const { token } = require('../config.json')
const { VK } = require('vk-io');
const vk = new VK({
	token: token
});

async function vkapi(id) {
    const [{ photo_max }] = await vk.api.users.get({
        user_id: id,
        fields: 'photo_max'
    });
    return photo_max;
}



router.get('/', async (req, res) =>{

    res.render('index', {
        title: 'CurlyDev',
        style: 'main.css',
        isindex: true,
        dexter_vk: await vkapi(471030541),
        ostin_vk: await vkapi(508323024),
        gelshteyn_vk: await vkapi(379508731)
        
    })
})

router.get('/servers', async (req, res) =>{

    res.render('servers', {
        title: 'CurlyDev | servers',
        style: 'servers.css',
        isServers: true
    })
})

module.exports = router
