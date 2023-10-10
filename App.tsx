import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import CurrentWeather from './screens/CurrentWeather'
import UpcomingWeather from './screens/UpcomingWeather'
import City from './screens/City'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Current Weather"
          component={CurrentWeather}
          options={{
            tabBarLabel: 'Current Weather',
            tabBarIcon: ({ color, size }) => (
              <Feather name="sun" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Upcoming Weather"
          component={UpcomingWeather}
          options={{
            tabBarLabel: 'Upcoming Weather',
            tabBarIcon: ({ color, size }) => (
              <Feather name="calendar" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="City"
          component={City}
          options={{
            tabBarLabel: 'City',
            tabBarIcon: ({ color, size }) => (
              <Feather name="map-pin" size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
