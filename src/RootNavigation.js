import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './Screens/LoginSIgnup/AuthNavigation'

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <AuthNavigation />
        </NavigationContainer>
    )
}

export default RootNavigation

