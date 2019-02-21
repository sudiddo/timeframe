/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const day = [
  // {
  //   day: 1,
  //   activity: [{ timeframe: 1 }, { timeframe: 2 }, { timeframe: 3 }, { timeframe: 4 }],
  // },
  {
    day: 2,
    activity: [{ timeframe: 1 }, { timeframe: 3 }, { timeframe: 4 }],
  },
];

type Props = {};
export default class App extends Component<Props> {
  render() {
    const timeframes = [];
    const timeCount = 4;
    let pagi = false;
    let siang = false;
    let sore = false;
    let malam = false;

    day.map(day => {
      console.log('DAY', day);
      day.activity.map(activity => {
        timeframes.push(activity.timeframe);
      });
    });

    timeframes.map(el => {
      if (el === 1) {
        pagi = true;
      } else if (el === 2) {
        siang = true;
      } else if (el === 3) {
        sore = true;
      } else if (el === 4) {
        malam = true;
      }
    });

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>PAGI</Text>
        <Text style={styles.instructions}>{pagi ? 'ADA AKTIVITAS' : 'FREE TIME'}</Text>

        <Text style={styles.welcome}>SIANG</Text>
        <Text style={styles.instructions}>{siang ? 'ADA AKTIVITAS' : 'FREE TIME'}</Text>

        <Text style={styles.welcome}>SORE</Text>
        <Text style={styles.instructions}>{sore ? 'ADA AKTIVITAS' : 'FREE TIME'}</Text>

        <Text style={styles.welcome}>MALAM</Text>
        <Text style={styles.instructions}>{malam ? 'ADA AKTIVITAS' : 'FREE TIME'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
