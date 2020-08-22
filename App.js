/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
    StatusBar,
    BackHandler,
} from 'react-native';

import RNFS  from 'react-native-fs';

import BirthPick from './src/pages/birthpick';
import DeathPick from './src/pages/deathpick';
import LifeTimer from './src/pages/lifetimer';
import KeepAwake from 'react-native-keep-awake';

class App extends React.Component {
    state = {
        pageStack: ['death'],
        birth: undefined,
        death: undefined,
    }

    backAction = () => {
        let newState = this.state;
        newState.pageStack.pop();
        this.setState(newState);
        
        if(this.state.pageStack.length <= 0) {
            BackHandler.exitApp()
        }
        return true;
    };

    setNextPage(page) {
        let newState = this.state;
        newState.pageStack.push(page);
        this.setState(newState);
    }

    setDate(date, type) {
        let newState = this.state;
        if(['birth', 'death'].includes(type)) {
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            newState[type] = date;
        }
        this.setState(newState);
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    render() {
        let page = <></>;
        switch(this.state.pageStack[this.state.pageStack.length - 1]) {
            case 'birth':
                page = <BirthPick setNextPage={this.setNextPage.bind(this)} setDate={this.setDate.bind(this)}/>;
                break;
            case 'death':
                page = <DeathPick setNextPage={this.setNextPage.bind(this)} setDate={this.setDate.bind(this)}/>;
                break;
            case 'timer':
                page = <LifeTimer setNextPage={this.setNextPage.bind(this)} death={this.state.death}/>;
                break;
        }
        return (
            <>
                <StatusBar backgroundColor="#000"/>
                {page}
                <KeepAwake/>
            </>
        );
    }
}

export default App;
