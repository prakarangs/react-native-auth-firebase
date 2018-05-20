import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { text: '' };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={this.state.text}
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>Login Now</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
