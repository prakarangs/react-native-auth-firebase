import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  state = { loggedin: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDPjAEahIRI0iCqj1jNpcKtRgiQ1pf_j-w',
      authDomain: 'authentication-c40c0.firebaseapp.com',
      databaseURL: 'https://authentication-c40c0.firebaseio.com',
      projectId: 'authentication-c40c0',
      storageBucket: 'authentication-c40c0.appspot.com',
      messagingSenderId: '598909505400'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedin: true });
      } else {
        this.setState({ loggedin: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedin) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
