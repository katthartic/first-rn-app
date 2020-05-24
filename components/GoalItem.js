import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GoalItem = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <Text>{item}</Text>
    </View>
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
