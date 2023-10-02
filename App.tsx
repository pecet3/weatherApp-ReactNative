import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  console.log('test')
  return (
    <View style={{ height: 100, width: 100, backgroundColor: 'gray' }}>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11b43a',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
