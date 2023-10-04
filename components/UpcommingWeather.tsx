import React from 'react'
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
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#c4edfb'
  },
  image: {
    height: 100,
    width: '100%'
  }
})
type Item = {
  date: string
  temperature: number
  cloudiness: string
}
const Item = (props: Item) => {
  const { date, temperature, cloudiness } = props
  return (
    <View style={styles.container}>
      <Text>{date} //</Text>
      <Text>Temperature: {temperature} //</Text>
      <Text>{cloudiness}</Text>
    </View>
  )
}

const Empty = () => {
  return (
    <View>
      <Text>There's nothing to show</Text>
    </View>
  )
}

const UpcommingWeather = () => {
  const render = ({ item }: { item: Item }) => (
    <Item
      date={item.date}
      temperature={item.temperature}
      cloudiness={item.cloudiness}
    />
  )
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/cloudsa.jpg')}
        style={styles.image}
      >
        <FlatList
          data={weatherData}
          renderItem={render}
          keyExtractor={(item) => item.date}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: '#53ffdd', height: 1 }} />
          )}
          ListEmptyComponent={() => <Empty />}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}
export default UpcommingWeather
