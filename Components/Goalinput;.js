import React from 'react';

import { View, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
const GoalInput = props => {

  
    const [enteredGoal, setenterGoaltText] = useState('');

    const GoalinputHandler = enterText => {
        setenterGoaltText(enterText)
    }

    return (<View style={styles.inpucontner}>

        <TextInput
            placeholder='Course Goal'
            style={styles.input}
            onChangeText={GoalinputHandler}
            value={enteredGoal}
        />
        <Button
            title='ADD' onPress={props.onAddGoal.bind(this,enteredGoal)} />
    </View>);
};
const styles = StyleSheet.create({

    inpucontner: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"
    },
    input: { borderTopColor: 'black', borderWidth: 1, padding: 10, width: "80%" },


})

export default GoalInput;