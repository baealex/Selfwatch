/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  state = {
    date: new Date(),
  }

  setDate(date) {
    let newState = this.state;
    newState.date = date;
    this.setState(newState);
  }

  inputBirth() {
    
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor="#000"/>
        <View style={styles.body}>
          <View style={styles.datePicker}>
            <DatePicker
              date={this.state.date}
              mode='date'
              locale='ko'
              maximumDate={new Date}
              onDateChange={(date) => this.setDate(date)}
              textColor='#fff'
            />
          </View>
          <TouchableOpacity onPress={this.inputBirth.bind(this)}>
            <Text style={styles.lightColor}>확인</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightColor: {
    color: '#fff',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  }
});

export default App;
