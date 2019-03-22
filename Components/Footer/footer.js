import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterComponent extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon active name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="list" />
              <Text>Todos</Text>
            </Button>
            <Button vertical>
              <Icon name="document" />
              <Text>About</Text>
            </Button>
            <Button vertical>
              <Icon name="contact" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}