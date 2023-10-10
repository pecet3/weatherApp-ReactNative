import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
const City = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={require('../assets/city.jpg')}
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.columnContainer}>
            <Feather name="sun" size={64} color="black" />
            <Text style={styles.largeText}>Gdańsk</Text>
            <Text style={styles.mediumText}>Poland</Text>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.details}>
              <Feather name="sunrise" size={32} color="black" />
              <Text style={styles.mediumText}>10:52 PM</Text>
            </View>
            <View style={styles.details}>
              <Feather name="sunset" size={32} color="black" />
              <Text style={styles.mediumText}>10:52 PM</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff81',
    height: '100%'
  },
  columnContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8
  },
  details: {
    flexDirection: 'row',
    marginTop: '50%'
  },
  largeText: {
    fontSize: 64
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
  },
  background: {
    height: '100%',
    width: '100%'
  }
})
export default City
