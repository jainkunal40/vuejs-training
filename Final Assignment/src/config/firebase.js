import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDAvkhcCV2CZgEXfulb892kY1ZAQZWEc-M",
    authDomain: "vuedata-f8fba.firebaseapp.com",
    databaseURL: "https://vuedata-f8fba.firebaseio.com",
    projectId: "vuedata-f8fba",
    storageBucket: "vuedata-f8fba.appspot.com",
    messagingSenderId: "614270593122"
});

export const db = app.database();
export const nameRef = db.ref('portfolio');