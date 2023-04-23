import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from '../../../assets/welcome_scr.gif'
import { colors, horizon } from '../../Globals/styles'

import { firebase } from "../../../Firebase/firebaseConfig"

const WelcomeScreen = ({ navigation }) => {

    const [userLogged, setUserlogged] = useState(null)


    useEffect(() => {
        const checkLogin = () => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // console.log(user);
                    setUserlogged(user);
                }
                else {
                    setUserlogged(null);
                    console.log('No User Logged in ');
                }
            })
        }
        checkLogin()
    }, [])

    const handelLogout = () => {
        firebase.auth().signOut()
            .then(() => {
                setUserlogged(null);
                console.log('User logged out')
            }).catch((err) => {
                console.log(err);
            })
    }

    // console.log(userLogged)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Tripe</Text>
            <View style={styles.logoout}>
                <Image source={logo} style={styles.logo} />
            </View>

            <View style={horizon} />
            <Text style={styles.text}>Find the best food around you at lowest price.</Text>
            <View style={horizon} />

            {userLogged == null ?
                <View style={styles.btnout}>
                    <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                        <Text style={styles.btn}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Text style={styles.btn}>Log in</Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.logged}>
                    <Text style={styles.txtlog}>Hi, <Text style={styles.txtlogin}>{userLogged.email}</Text><Text style={styles.hello}>👋</Text></Text>
                    <View style={styles.btnout}>
                        <TouchableOpacity onPress={() => navigation.navigate('home')}>
                            <Text style={styles.btn}>Next</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handelLogout()}>
                            <Text style={styles.btn}>Log Out</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            }

        </View >
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff4242",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 50,
        color: colors.coll,
        textAlign: "center",
        marginVertical: 10,
        fontWeight: '200'
    },
    logoout: {
        width: '80%',
        height: '40%',
        // backgroundColor: "white",
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 15,
        width: '80%',
        color: colors.coll,
        textAlign: 'center',
    },
    btnout: {
        flexDirection: "row",
    },
    btn: {
        fontSize: 20,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 30,
        marginHorizontal: 10,
        fontWeight: '700',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20


    },
    logged: {
        // justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        // flexDirection: "row",

    },
    txtlog: {
        fontSize: 18,
        color: colors.coll,
    },
    txtlogin: {
        fontSize: 19,
        color: colors.coll,
        fontWeight: '700',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',

    },
    hello: {
        fontSize: 30,
        elevation: 100,
        // color: 'red'
    }


})