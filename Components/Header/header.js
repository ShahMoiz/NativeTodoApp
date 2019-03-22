import React, {Component} from 'react'
import {StyleProvider, Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

class HeaderComponent extends Component {
  render() {
    return (
            //  <StyleProvider style={getTheme()}>
  
  <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' />
              </Button>
              <Button transparent>
                <Icon name='heart' />
              </Button>
              <Button transparent>
                <Icon name='more' />
              </Button>
            </Right>
          </Header>
        </Container>
      //  </StyleProvider>
  
    )}}

    export default HeaderComponent