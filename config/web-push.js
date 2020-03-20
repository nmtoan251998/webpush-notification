const webpush = require('web-push');

function generateVAPIDKeys() {
    const vapidKeys = webpush.generateVAPIDKeys();

    return {
        publicKey: vapidKeys.publicKey,
        privateKey: vapidKeys.privateKey,
    }
}

module.exports = {
    publicKey: 'BGmYB41xeyaOfpN0VjrdPVpp0XPzD1-UgKC0GV2V84uXeWDl3tpMtjjcyPju9oAj9luFqP6vJhnZuu7mOJHSCI4',
    privateKey: 'I7lulTDkJq3k-9WyqGJJ5lzpbwnPni1-WkAqCMh0Ua8',
};
