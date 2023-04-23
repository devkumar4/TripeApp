import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../src/Globals/styles'

const HomeHeadNav = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Fontisto name="nav-icon-list-a" size={20} color="black" style={styles.myicon} />
            <View style={styles.containerin}>
                <Text style={styles.mytext}>Tripe</Text>
                <MaterialCommunityIcons name='food-outline' size={26} color="black" style={styles.myicon} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                <FontAwesome5 name='user-circle' size={26} color='black' style={styles.myicon} />
            </TouchableOpacity>

        </View>
    )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.coll,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 10
    },
    containerin: {
        flexDirection: "row",
        alignItems: "center",
    },
    myicon: {
        color: colors.text1,
    },
    mytext: {
        color: colors.text1,
        fontSize: 30
    }
})