importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCexZ6c_vf71AhuwaFdUyjZSWyO3Cs6Ro4",
    authDomain: "mpf-app-aa865.firebaseapp.com",
    projectId: "mpf-app-aa865",
    storageBucket: "mpf-app-aa865.firebasestorage.app",
    messagingSenderId: "968635788313",
    appId: "1:968635788313:web:e5d8e8c2387ea42d934e88"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'icon.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});

// 加入 Fetch 監聽器，令 Chrome 識別為正式可安裝的 PWA App
self.addEventListener('fetch', function(event) {
    // 放空即可，只是為了解鎖 PWA 安裝功能
});
