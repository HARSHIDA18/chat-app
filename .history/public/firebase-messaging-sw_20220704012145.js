/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyAjRuaZp02lSzKNBNr_BR-G6vS9vpUZcx0',
  authDomain: 'chat-web1-app.firebaseapp.com',
  databaseURL:
    'https://chat-web1-app-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web1-app',
  storageBucket: 'chat-web1-app.appspot.com',
  messagingSenderId: '762465939074',
  appId: '1:762465939074:web:26c043ba5823dad5414e9b',
});

firebase.messaging();