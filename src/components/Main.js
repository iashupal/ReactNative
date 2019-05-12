import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import AddTask from './AddTask';
export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
        this.addNote = this.addNote.bind(this);
    }

    
  render() {
     let notes = this.state.noteArray.map((val, key) => {
         return <AddTask key={key} keyval={key} val={val}
            deleteTask= { () => this.deleteTask(key)}
         />
     });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>ToDo App</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
            {notes}
        </ScrollView>
        <View style={styles.footer}>
            <TextInput 
                style={styles.textInput} 
                placeholder="Task" 
                onChangeText={( noteText ) => this.setState({noteText})}
                value={this.state.noteText}
                placeholderTextColor='white'
                underlineColorAndroid='transparent'
            />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={this.addNote}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
  addNote(){
    // alert('notes');
    if(this.state.noteText) {
        var d = new Date();
        this.state.noteArray.push({
            'date': d.getFullYear() + 
            "/" + (d.getMonth() + 1) + 
            "/" + d.getDate(),
            'note': this.state.noteText
        });
        this.setState({ noteArray: this.state.noteArray})
        this.setState({noteText: ''});
    }
}
deleteTask(key){
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray})
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  header: {
      backgroundColor: '#E91E63',
      alignItems: 'center',
    //   justifyContent: 'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd'
  },
  headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26,
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100,
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#E91E63',
      width: 90,
      height: 90,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
  },
  addButtonText: {
      color: '#fff',
      fontSize: 24,
  }
});
