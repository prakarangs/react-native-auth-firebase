import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDPjAEahIRI0iCqj1jNpcKtRgiQ1pf_j-w',
      authDomain: 'authentication-c40c0.firebaseapp.com',
      databaseURL: 'https://authentication-c40c0.firebaseio.com',
      projectId: 'authentication-c40c0',
      storageBucket: 'authentication-c40c0.appspot.com',
      messagingSenderId: '598909505400'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}
