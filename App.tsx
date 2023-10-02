import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import CurrentWeather from './components/CurrentWeather'
import UpcommingWeather from './components/UpcommingWeather'

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
      <UpcommingWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
