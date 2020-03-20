const Router = require('express').Router();
const webpush = require('web-push');

const Notification = require('./models/Notification.model');
const { publicKey, privateKey } = require('./config/web-push');

// configure webpush
webpush.setVapidDetails('mailto:knowllipopmaker@gmail.com', publicKey, privateKey);

/**
 * New subscription
 */
Router.post('/subscribe', async (req, res) => {
    // Get push subscription object
    const {
        key,
    } = req.body;

    res.status(201).json({});

    const payload = JSON.stringify(
        {
            title: 'Knowllipop',
            body: 'Thank you for subscripting our service',
            icon: 'http://image.ibb.co/frYOFd/tmlogo.png',
            url: 'http://localhost:8080/subscribe',
        },
    );

    try {
        await webpush.sendNotification(key, payload);
    } catch (e) {
        console.log(e);
    }
});

/**
 * Unscription
 */
Router.post('/unsubscribe', async (req, res) => {
    // Get push subscription object
    const {
        key,
    } = req.body;

    res.status(201).json({});

    const payload = JSON.stringify(
        {
            title: 'Knowllipop',
            body: 'Thank you for using our service',
            icon: 'http://image.ibb.co/frYOFd/tmlogo.png',
            url: 'http://localhost:8080/unsubscribe',
        },
    );

    try {
        await webpush.sendNotification(key, payload);
    } catch (e) {
        console.log(e);
    }
});

/**
 * follow
 */
Router.post('/follow', async (req, res) => {
    // Get push subscription object
    const {
        key,
        data,
    } = req.body;

    res.status(201).json({});

    const payload = JSON.stringify(
        {
            title: 'Knowllipop',
            body: `${data.sourceId} has just follow you`,
            icon: 'http://image.ibb.co/frYOFd/tmlogo.png',
            url: 'http://localhost:8080/follow',
        },
    );

    try {
        await webpush.sendNotification(key, payload);
    } catch (e) {
        console.log(e);
    }
});

/**
 * like
 */
Router.post('/like', async (req, res) => {
    // Get push subscription object
    const {
        key,
        data,
    } = req.body;

    res.status(201).json({});

    const payload = JSON.stringify(
        {
            title: 'Knowllipop',
            body: `${data.sourceId} has just like your video`,
            icon: 'http://image.ibb.co/frYOFd/tmlogo.png',
            url: 'http://localhost:8080/like',
        },
    );

    try {
        await webpush.sendNotification(key, payload);
    } catch (e) {
        console.log(e);
    }
});

/**
 * system
 */
Router.post('/system', async (req, res) => {
    // Get push subscription object
    const {
        key,
        data,
    } = req.body;

    res.status(201).json({});

    const payload = JSON.stringify(
        {
            title: 'Knowllipop',
            body: 'We has just released new feature, check it out',
            icon: 'http://image.ibb.co/frYOFd/tmlogo.png',
            url: 'http://localhost:8080/system',
        },
    );

    try {
        await webpush.sendNotification(key, payload);
    } catch (e) {
        console.log(e);
    }
});

module.exports = Router;