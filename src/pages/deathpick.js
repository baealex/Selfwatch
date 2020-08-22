import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

class BirthPick extends React.Component {
    state = {
        date: new Date(),
    }

    setDate(date) {
        this.props.setDate(date, 'death');

        let newState = this.state;
        newState.date = date;
        this.setState(newState);
    }

    inputBirth() {
        this.props.setNextPage('timer');
    }

    render() {
        return (
        <>
            <View style={styles.body}>
                <Text style={styles.titleText}>사망일자</Text>
                <View style={styles.datePicker}>
                    <DatePicker
                        date={this.state.date}
                        mode='date'
                        locale='ko'
                        minimumDate={new Date}
                        onDateChange={(date) => this.setDate(date)}
                        textColor='#fff'
                        fadeToColor='#000000'
                    />
                </View>
                <TouchableOpacity onPress={this.inputBirth.bind(this)}>
                    <Text style={styles.doneButton}>확인</Text>
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
    titleText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    datePicker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    doneButton: {
        marginTop: 8,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    }
});

export default BirthPick;