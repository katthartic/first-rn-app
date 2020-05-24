import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native'

import GoalItem from './components/GoalInput'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ])
    setEnteredGoal()
  }

  const disabled = () => {
    if (enteredGoal) return false
    return true
  }

  return (
    <View style={{ padding: 50 }}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Cousre Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button title="Add" onPress={addGoalHandler} disabled={disabled()} />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => <GoalItem item={itemData.item.value} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
})
