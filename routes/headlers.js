const { Router } = require('express');
const router = Router();
const vkapi = require('../models/vkapi');
//const { allmem, usemem, osplatform, cpuUse } = require('../models/monitor');
const os = require('os-utils');
const math = require('mathjs');



const Gamedig = require('gamedig');
let gmod_host = { type: 'garrysmod',host: '188.225.24.127' }
//let mine_host = { type: 'minecraft',host: 'mc.curly.gq' }
let gmod = Gamedig.query(gmod_host).then((state) => { return state }).catch((error) => console.log(error));
//let mine = Gamedig.query(mine_host).then((state) => { return state }).catch((error) => console.log(error));
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


function allmem() {
    let totalmem = os.totalmem() / 1024;
    let l = math.round(totalmem, 2)
    return l;
}

function usemem() {
    let freemem = os.freemem() / 1024; 
    let totalmem = os.totalmem() / 1024;
    let usagemem = totalmem - freemem;
    let l = math.round(usagemem, 2) 
    return l;
}

let osplatform = os.platform();




router.get('/servers', async (req, res) =>{
    let gmod_json = await gmod;
/*     let mine_json = await mine;

    console.log(mine) */
      
      
        res.render('servers', {
            title: 'CurlyDev | Servers',
            style: 'server.css',
            isServers: true,
            drp_name: await gmod_json.name || 'server offline...',
            drp_map: await gmod_json.map || '',
            drp_players: `${await gmod_json.raw.numplayers} / ${await gmod_json.maxplayers}`
        });
    });
    

router.get('/skins', async (req, res) =>{
     
    res.render('osuskins', {
        title: 'CurlyDev | Osu!Skins',
        style: 'osuskins.css',
        isSkins: true,
        card: '<div id = "asdf"></div>'
    });
});


 router.get('/monitoring', async (req, res) =>{
    res.render('monitoring', {
        title: 'CurlyDev | Host monitoring',
        style: 'monitor.css',
        isMonitor: true,
        allmem: allmem(),
        usemem: usemem(),
        osplatform: osplatform,
        uptime: `uptime: ${math.round(os.processUptime() / 60 / 60, 0)} h`

    });
});


router.get('*', async (req, res) =>{

    res.render('error', {
        title: 'Error!'
    });
})


module.exports = router