const publicVAPIKey = 'BGmYB41xeyaOfpN0VjrdPVpp0XPzD1-UgKC0GV2V84uXeWDl3tpMtjjcyPju9oAj9luFqP6vJhnZuu7mOJHSCI4';


function NotificationStrategy(SWInstance, requestData) {
    this.requestObject = {
        key: SWInstance,
        data: requestData,
    }

    this._welcomebackNotification = async () => {
        const request = {
            url: '/welcome-back',
            method: 'POST',
            body: JSON.stringify(this.requestObject),
            headers: {
                'content-type': 'application/json',
            }
        }

        try {
            fetch(request.url, request);
        } catch (e) {
            console.log(e);
        }
    }

    this._subscribeNotification = async () => {
        const request = {
            url: '/subscribe',
            method: 'POST',
            body: JSON.stringify(this.requestObject),
            headers: {
                'content-type': 'application/json',
            }
        }
        try {
            fetch(request.url, request);
        } catch (e) {
            console.log(e);
        }
    }

    this._unsubscribeNotification = async () => {
        const request = {
            url: '/unsubscribe',
            method: 'POST',
            body: JSON.stringify(this.requestObject),
            headers: {
                'content-type': 'application/json',
            }
        }

        try {
            fetch(request.url, request);
        } catch (e) {
            console.log(e);
        }
    }

    this._followNotification = async () => {
        const request = {
            url: '/follow',
            method: 'POST',
            body: JSON.stringify(this.requestObject),
            headers: {
                'content-type': 'application/json',
            }
        }

        try {
            fetch(request.url, request);
        } catch (e) {
            console.log(e);
        }
    }

    this._systemNotification = async () => {
        const request = {
            url: '/system',
            method: 'POST',
            body: JSON.stringify(this.requestObject),
            headers: {
                'content-type': 'application/json',
            }
        }

        try {
            fetch(request.url, request);
        } catch (e) {
            console.log(e);
        }
    }

    this._likeNotification = async () => {
        const request = {
            url: '/like',
            method: 'POST',
            body: JSON.stringify(this.requestObject),
            headers: {
                'content-type': 'application/json',
            }
        }

        try {
            fetch(request.url, request);
        } catch (e) {
            console.log(e);
        }
    }

    return {
        subscribe: this._subscribeNotification,
        unsubscribe: this._unsubscribeNotification,
        follow: this._followNotification,
        system: this._systemNotification,
        like: this._likeNotification,
        welcomeback: this._welcomebackNotification,
    };
}

// register Service worker
async function registerSW() {
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/',
    });

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVAPIKey),
    });

    return subscription;
};

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};

async function requestPermission() {
    console.log('Requesting permission...');
    // [START request_permission]
    return Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            return true;
        } else {
            console.log('Unable to get permission to notify.');
            return false;
        }
    });
    // [END request_permission]
}

// check service worker
if ('serviceWorker' in navigator) {
    document.addEventListener('DOMContentLoaded', async () => {
        // instantiate new SW instance
        const SWInstance = await registerSW();

        await requestPermission()
            ? await NotificationStrategy(SWInstance).welcomeback()
            : console.log;
    });



    document.querySelector('#subscribe').addEventListener('click', async (event) => {
        // instantiate new SW instance
        const SWInstance = await registerSW();

        await NotificationStrategy(SWInstance).subscribe();
    });

    document.querySelector('#unsubscribe').addEventListener('click', async () => {
        // instantiate new SW instance
        const SWInstance = await registerSW();

        await NotificationStrategy(SWInstance).unsubscribe();
    });

    document.querySelector('#follow').addEventListener('click', async () => {
        // instantiate new SW instance
        const SWInstance = await registerSW();

        const requestData = {
            sourceId: 'userId1',
            destination: 'userId2',
            type: 'follow',
        };

        await NotificationStrategy(SWInstance, requestData).follow();
    });

    document.querySelector('#system').addEventListener('click', async () => {
        // instantiate new SW instance
        const SWInstance = await registerSW();

        const requestData = {
            sourceId: 'userId1',
            destination: 'userId2',
            type: 'system',
        };

        await NotificationStrategy(SWInstance, requestData).system();
    });

    document.querySelector('#like').addEventListener('click', async () => {
        // instantiate new SW instance
        const SWInstance = await registerSW();

        const requestData = {
            sourceId: 'userId1',
            destination: 'userId2',
            type: 'like',
        };

        await NotificationStrategy(SWInstance, requestData).like();
    });
};