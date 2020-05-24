import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const GoalItem = ({ id, name, onDeleteGoal }) => {
  return (
    <TouchableOpacity onLongPress={onDeleteGoal.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
})

export default GoalItem
