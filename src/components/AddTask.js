import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class AddTask extends Component {
  render() {
    return (
      <View style={styles.task} key={this.props.keyval}> 

        <Text style={styles.taskText}>{this.props.val.date}</Text> 
        <Text style={styles.noteText}>{this.props.val.note}</Text>
        <TouchableOpacity onPress={this.props.deleteTask} style={styles.taskDelete}>
            <Text style={styles.taskDeleteText}>D</Text> 
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 task: {
     position: 'relative',
     padding: 20,
     paddingRight: 100,
     borderBottomWidth: 2,
     borderBottomColor: '#ededed',
     color: '#000000',

 },
 taskText: {
     paddingLeft: 20,
     borderLeftWidth: 10,
     borderLeftColor: '#E91E63',
     color: '#000000',
 },
 taskDelete: {
     position: 'absolute',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#2980b9',
     padding: 10,
     top: 10,
     bottom: 10,
     right: 10,
 },
 taskDeleteText: {
     color: 'white'
 },
});
