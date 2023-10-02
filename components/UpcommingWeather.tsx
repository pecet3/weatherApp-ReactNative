import React from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
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
type Item = {
  date: string
  temperature: number
  cloudiness: string
}
const Item = (props: Item) => {
  const { date, temperature, cloudiness } = props
  return (
    <View>
      <Text>{date}</Text>
      <Text>{temperature}</Text>
      <Text>{cloudiness}</Text>
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
      <FlatList data={weatherData} renderItem={render} />
    </SafeAreaView>
  )
}
export default UpcommingWeather
