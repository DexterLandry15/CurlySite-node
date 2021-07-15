const os = require('os-utils');
const math = require('mathjs');


function allmem() {
    let totalmem = os.totalmem() / 1024;
    let l = math.round(totalmem, 2)
    return l;
}

function usemem(params) {
    let freemem = os.freemem() / 1024;
    let totalmem = os.totalmem() / 1024;
    let usagemem = totalmem - freemem;
    let l = math.round(usagemem, 2) 
    return l;
}


module.exports = {
    allmem,
    usemem
}