import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const CurrentWeather = () => {
  const [temperature, setTemperature] = useState(6)
  const [feelTemperature, setFeelTemperature] = useState(5)
  const [maxTemperature, setMaxTemperature] = useState(8)
  const [minTemperature, setMinTemperature] = useState(4)
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={require('../assets/cloudsa.jpg')}
        style={styles.image}
      >
        <View style={styles.container}>
          <Text style={styles.largeText}>Current weather</Text>
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
      </ImageBackground>

      <View style={styles.bottomContainer}>
        <Text style={styles.largeText}>It's Sunny</Text>
        <Text style={styles.mediumText}>
          You can wear a hoodie and bring some jacket with you
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#61c3f4',
    flex: 1,
    alignItems: 'center',
    gap: 8
  },
  tempContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 192
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
    paddingTop: 30,
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
    height: '100%',
    width: '100%'
  }
})
export default CurrentWeather
