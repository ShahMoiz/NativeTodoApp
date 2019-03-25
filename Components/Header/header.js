import React, {Component} from 'react'
import {StyleProvider, Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

class HeaderComponent extends Component {
  render() {
    return (
            //  <StyleProvider style={getTheme()}>
  
          <Header noLeft>
            <Body>
              <Title>Native Todo App</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' />
              </Button>
              <Button transparent>
                <Icon name='add' />
              </Button> 
              <Button transparent>
                <Icon name='more' />
              </Button>
            </Right>
          </Header>
      //  </StyleProvider>
  
    )}}

    export default HeaderComponent