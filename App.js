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
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function App() {

  const [courceGoal, setCourceGoal] = useState([]);

  const [enteredGoal, setenterGoaltText] = useState('');


  const GoalinputHandler = enterText => {
    setenterGoaltText(enterText)
}
  const addGoalHandler = () => {
    setCourceGoal(currentGoals => [...currentGoals, { id: Math.random().toString, value: enteredGoal }])
  }
  return (
    <View style={styles.screen}>

<View style={styles.inpucontner}>

<TextInput
    placeholder='Course Goal'
    style={styles.input}
    onChangeText={GoalinputHandler}
    value={enteredGoal}
/>
<Button
    title='ADD' onPress={addGoalHandler} />
</View>

      <FlatList
       
        data={courceGoal}
        renderItem={itemData => (
        <View style={styles.listite}>
          <Text>{itemData.item.value}</Text>
         </View>)}
      ></FlatList>




    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inpucontner: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"
  },
  input: { borderTopColor: 'black', borderWidth: 1, padding: 10, width: "80%" },
  listite: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }

})


