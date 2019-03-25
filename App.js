/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from './Components/Header/header'
import FooterComponent from './Components/Footer/footer'
import { Container,Fab,Icon } from 'native-base';
import HomeComponent from './Components/Home/home';
type Props = {};
export default class App extends Component<Props> {
  render() { 
    return (
      <Container style={{flex: 1}}>
        <HeaderComponent/>
        <HomeComponent/>
        <Fab
            style={{ backgroundColor: '#5067FF', marginBottom: 45 }}
            position="bottomRight"
            >
            <Icon name="add" />
            
          </Fab>
        <FooterComponent/>
        
      </Container>

      
    );
  }
}
