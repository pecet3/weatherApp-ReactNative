import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    flex: 1,
    alignItems: 'center'
  },
  wrapper: {
    flex: 1
  }
})
export default App
