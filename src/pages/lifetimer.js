import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

class DatePick extends React.Component {
    state = {
        time: 0,
    }

    componentDidMount() {
        let death = this.props.death;

        setInterval(() => {
            let remainTime = Math.abs(death - new Date());
            let remainDays = remainTime/1000/60/60/24;

            let newState = this.state;
            newState.time = `${remainDays.toFixed(8)}`;
            this.setState(newState);
        }, 1)
    }

    render() {
        return (
        <>
            <View style={styles.body}>
                <Text style={styles.timer}>{this.state.time}</Text>
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
    timer: {
        marginTop: 8,
        color: '#fff',
        fontSize: 45,
        fontWeight: 'bold'
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    bottomButton: {
        color: '#fff',
    }
});

export default DatePick;