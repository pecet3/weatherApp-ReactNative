import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

export type Item = {
  date: string
  temperature: number
  cloudiness: string
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 128,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff76'
  },
  lgText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18
  },
  smContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const ListItem = (props: Item) => {
  const { date, temperature, cloudiness } = props

  return (
    <View style={styles.container}>
      <View style={styles.smContainer}>
        <Feather name="sun" size={64} color="black" />
        <Text>{cloudiness}</Text>
      </View>
      <View style={styles.smContainer}>
        <Text>{date}</Text>
        <Text style={styles.lgText}>Temperature: {temperature}</Text>
      </View>
    </View>
  )
}
