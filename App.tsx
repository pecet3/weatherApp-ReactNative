import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const App = () => {
  const [temperature, setTemperature] = useState(6)
  const [feelTemperature, setFeelTemperature] = useState(5)
  const [maxTemperature, setMaxTemperature] = useState(8)
  const [minTemperature, setMinTemperature] = useState(4)
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.largeText}>Current weather</Text>
        <Text style={styles.mediumText}>Temperature:{temperature}</Text>
        <Text style={(styles.smallText, { color: '#1c89dc' })}>
          Feels like: {feelTemperature}
        </Text>
        <View style={styles.rowContainer}>
          <Text style={styles.smallText}>max:{maxTemperature}</Text>
          <Text style={styles.smallText}>min:{minTemperature}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.largeText}>
          <Feather name="sun" size={24} color="black" />
          It's Sunny
        </Text>
        <Text style={styles.mediumText}>
          You can wear a hoodie and bring some jacket
        </Text>
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
  bottomContainer: {
    backgroundColor: '#a6a6a6',
    padding: 2,
    alignItems: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 4
  },
  wrapper: {
    flex: 1,
    paddingTop: 30
  },
  largeText: {
    fontSize: 26
  },
  mediumText: {
    fontSize: 20
  },
  smallText: {
    fontSize: 16
  }
})
export default App
