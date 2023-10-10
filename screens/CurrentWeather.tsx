import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { ListItem } from '../components/ListItem'

const CurrentWeather = () => {
  const [temperature, setTemperature] = useState(6)
  const [feelTemperature, setFeelTemperature] = useState(5)
  const [maxTemperature, setMaxTemperature] = useState(8)
  const [minTemperature, setMinTemperature] = useState(4)
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={require('../assets/mountain.jpg')}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.tempContainer}>
            <Feather name="sun" size={64} color="black" />
            <Text style={styles.largeText}>Temperature: {temperature}</Text>
            <Text style={styles.mediumText}>Feels like: {feelTemperature}</Text>
            <View style={styles.rowContainer}>
              <Text style={styles.smallText}>max:{maxTemperature}</Text>
              <Text style={styles.smallText}>min:{minTemperature}</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.largeText}>It's Sunny</Text>
          <Text style={styles.mediumText}>
            You can wear a hoodie and bring some jacket with you
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff61'
  },
  tempContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    height: 100
  },
  rounded: {
    backgroundColor: '#fff'
  },
  bottomContainer: {
    backgroundColor: '#7ea8fb',
    padding: 2,
    alignItems: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 4
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  largeText: {
    fontSize: 32
  },
  mediumText: {
    fontSize: 24
  },
  smallText: {
    fontSize: 20
  },
  image: {
    height: 600,
    width: 200
  }
})
export default CurrentWeather
