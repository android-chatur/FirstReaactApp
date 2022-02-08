import { StatusBar } from 'expo-status-bar';
import {
  Button, StyleSheet,
  Console,
  style,
  ScrollView,
  Text,
  View,
  TextInput,
  FlatList
} from 'react-native';
import { useState } from 'react';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput;';

export default function App() {

  const [courceGoal, setCourceGoal] = useState([]);


  const addGoalHandler = goalTitile => {
    setCourceGoal(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString, value: goalTitile }])
  }
  return (
    <View style={styles.screen}>

      { }

      <GoalInput onAddGoal={addGoalHandler}></GoalInput>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courceGoal}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}


      />




    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },


})


