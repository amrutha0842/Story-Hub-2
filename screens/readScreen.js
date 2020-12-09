import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View>
                <Header
                 backgroundColor = {"red"}
                 centerComponent = {{
                     text: "Story Hub - 1"
                 }}
                />
                <Text style={{fontSize: 25,fontWeight: 'bold',alignItems: 'center',justifyContent: 'center'}}>
                 READING SCREEN
                </Text>
            </View>
        )
    }
}