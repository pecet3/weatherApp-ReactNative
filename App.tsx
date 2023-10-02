import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.h1}>Current weather</Text>
        <Text style={styles.temp}>Temperature: 6</Text>
        <Text style={styles.tempFeels}>Feels like: 5</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    flex: 1,
    alignItems: 'center',
    gap: 8
  },
  wrapper: {
    flex: 1,
    paddingTop: 30
  },
  h1: {
    fontSize: 25
  },
  temp: {
    fontSize: 20
  },
  tempFeels: {
    fontSize: 18,
    color: '#1c89dc'
  }
})
export default App
