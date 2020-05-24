import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [addGoalMode, setAddGoalMode] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ])
    setAddGoalMode(false)
  }

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelAddGoalMode = () => {
    setAddGoalMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => setAddGoalMode(true)} />
      <GoalInput
        visible={addGoalMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelAddGoalMode}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GoalItem
            id={item.id}
            name={item.value}
            onDeleteGoal={deleteGoalHandler}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
})
