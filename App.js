
import { Platform, View } from 'react-native';
import React, {useState}from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, TextInput } from 'react-native';
import { CheckBox, Button } from '@rneui/themed';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
 itemCompleted: {
textDecorationLine: 'line-through', textDecorationStyle: 'solid'
 }
});

export default function App() {
const [tasks, setTasks] = useState([
{id:1,description: "Play Basketball",completed: true},
{id:2,description: "Code Assignments", completed: false},
]);
const [todo, setTodo] = useState('');

function addTodo() {
const newTask = {id: Date.now(), description: todo, completed: false};
setTasks([...tasks, newTask]);
setTodo('');
}
function taskCompleted(id) {
setTasks(tasks.map(task => (task.id === id ? {...task, completed: !task.completed} : task)))
}

function completedItem({item}) {
return (

<View key={item.id}>
<CheckBox 

center
title={item.description}
checked={item.completed}
onPress={() => taskCompleted(item.id)}
textStyle={item.completed ? styles.itemCompleted : {}}
/>
</View>
)

}
return (
<SafeAreaView style={styles.container}>
<FlatList data={tasks} renderItem={completedItem} />
<Button title="Add" onPress={addTodo} />
<TextInput value={todo} onChangeText={setTodo} placeholder='Enter Task' />
</SafeAreaView>
)
}