console.log('Service worker loaded');
self.addEventListener('push', function(event) {
    const data = event.data.json();

    console.log('[Service Worker] Push notification event');
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: data.icon,
            tag: 'notification-tag',
            data: {
                url: data.url,
            },
        })
    )
    
});

self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Click notification event');
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({type: 'window'}).then( windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url && 'focus' in client) {
                    return client.focus();
                }
            }

            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(event.notification.data.url);
            }
        })
    );
});
