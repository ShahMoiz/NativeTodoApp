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
import { Container } from 'native-base';
import HomeComponent from './Components/Home/home';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container style={{flex: 1}}>
        <HeaderComponent/>
        <HomeComponent/>
        <FooterComponent/>
      </Container>

      
    );
  }
}
