import React, { useState, useEffect, useCallback } from "react";

import { StyleSheet, TextInput, View, Button } from "react-native";

import * as firebase from "firebase";
import "firebase/firestore";

import { GiftedChat } from "react-native-gifted-chat";

const firebaseConfig = {
  apiKey: "AIzaSyA4xCm9EwnukYaK_jUbjVyeIMAKv_8zK7I",
  authDomain: "chatapp-8eef8.firebaseapp.com",
  projectId: "chatapp-8eef8",
  storageBucket: "chatapp-8eef8.appspot.com",
  messagingSenderId: "1054825046080",
  appId: "1:1054825046080:web:deea9e96d0314843acbfa5",
  measurementId: "G-VD9Y3P4QH7",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const chatsRef = db.collection("chats");

