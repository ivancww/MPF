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
        icon: 'https://cdn-icons-png.flaticon.com/512/2950/2950085.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
