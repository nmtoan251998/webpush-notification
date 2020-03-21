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

    if (clients.openWindow) {
        clients.openWindow(event.notification.data.url);
    }

    return event.notification.close(); // Android needs explicit close.
});
