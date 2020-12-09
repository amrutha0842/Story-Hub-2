import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            TitleText: "Name of the story",
            AuthorText: "Author",
            StoryText: "Write the story!"
        }
    }
    render(){
        return(
            <View  style={{backgroundColor: 'white' , height: 1000}}>
                <Header
                 backgroundColor = {"red"}
                 centerComponent = {{
                     text: "Story Hub"
                 }}
                />

                <TextInput
                style={style.inputStyle}
                 onChangeText={(text)=>{
                     this.setState({
                         TitleText: text
                    })
                  }}
                  value={this.state.TitleText}/>

                  <TextInput
                      style={style.inputStyle}
                      onChangeText={(text)=>{
                          this.setState({
                              AuthorText: text
                          })
                      }}
                      value={this.state.AuthorText}/>   

                  <TextInput
                      style={{width:'80%', marginTop: 40, alignSelf: 'center', height: 200, textAlign: 'center', borderWidth: 2, borderRadius:25}}
                      onChangeText={(text)=>{
                          this.setState({
                              StoryText: text
                          })
                      }}
                      multiline={true}
                      value={this.state.StoryText}/>
            </View>
        )
     }
  }

  const style = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 50
      }
  })