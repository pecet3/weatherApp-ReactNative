import React from 'react'
import { ListItem, type Item } from '../components/ListItem'
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  ImageBackground
} from 'react-native'

const weatherData = [
  {
    date: '2023-10-02',
    temperature: 25,
    cloudiness: 'Słonecznie'
  },
  {
    date: '2023-10-03',
    temperature: 20,
    cloudiness: 'Pochmurno'
  },
  {
    date: '2023-10-04',
    temperature: 18,
    cloudiness: 'Deszczowo'
  },
  {
    date: '2023-10-02',
    temperature: 25,
    cloudiness: 'Słonecznie'
  },
  {
    date: '2023-10-03',
    temperature: 20,
    cloudiness: 'Pochmurno'
  },
  {
    date: '2023-10-04',
    temperature: 18,
    cloudiness: 'Deszczowo'
  },
  {
    date: '2023-10-02',
    temperature: 25,
    cloudiness: 'Słonecznie'
  },
  {
    date: '2023-10-03',
    temperature: 20,
    cloudiness: 'Pochmurno'
  },
  {
    date: '2023-10-04',
    temperature: 18,
    cloudiness: 'Deszczowo'
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#c4edfb',
    height: '100%',
    width: '100%'
  },
  image: {}
})

const Empty = () => {
  return (
    <View>
      <Text>There's nothing to show</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const render = ({ item }: { item: Item }) => (
    <ListItem
      date={item.date}
      temperature={item.temperature}
      cloudiness={item.cloudiness}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/cloudsa.jpg')}
        style={styles.image}
      >
        <FlatList
          data={weatherData}
          renderItem={render}
          keyExtractor={(item) => item.date}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: 'transparent', height: 24 }} />
          )}
          ListEmptyComponent={() => <Empty />}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}
export default UpcomingWeather
