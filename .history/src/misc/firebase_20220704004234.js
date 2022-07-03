import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyAjRuaZp02lSzKNBNr_BR-G6vS9vpUZcx0',
  authDomain: 'chat-web1-app.firebaseapp.com',
  databaseURL:
    'https://chat-web1-app-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web1-app',
  storageBucket: 'chat-web1-app.appspot.com',
  messagingSenderId: '762465939074',
  appId: '1:762465939074:web:26c043ba5823dad5414e9b',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BNHT7ZgYTlPKwkePoNZob-T-phpmAfG5-2uYaZ_llkITIf6bgmaVCBzXN_NTNjf6wCQ3eFnUpIcJei4xi34i6Zk'
  );
}
