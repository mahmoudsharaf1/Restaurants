import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Restaurants from '../screens/Restaurants';
import RestaurantsDetails from '../screens/Restaurants/RestaurantsDetails';




const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='Restaurants' component={Restaurants} />
            <Stack.Screen name='RestaurantsDetails' component={RestaurantsDetails} />


        </Stack.Navigator>
    )
}

export default StackNavigator;