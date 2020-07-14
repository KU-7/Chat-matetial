import * as firebase from 'firebase/app'
import 'firebase/auth'

// 認証情報
const firebaseConfig = {
  apiKey: 'AIzaSyAqul75nUDXx39lD6XG8k11LOqzctYDeTk',
  authDomain: 'mun-chat-app.firebaseapp.com',
  databaseURL: 'https://mun-chat-app.firebaseio.com',
  projectId: 'mun-chat-app',
  storageBucket: 'mun-chat-app.appspot.com',
  messagingSenderId: '1046860784486',
  appId: '1:1046860784486:web:353a58aea7e5b3b9cbdea7',
  measurementId: 'G-ERWYPR7K6D',
}

// 初期化
firebase.initializeApp(firebaseConfig)

export default firebase
