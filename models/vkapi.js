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


module.exports = vkapi