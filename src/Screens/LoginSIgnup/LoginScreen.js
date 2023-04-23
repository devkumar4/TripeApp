import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, horizon, title, btn1 } from '../../Globals/styles'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { firebase } from '../../../Firebase/firebaseConfig'
const LoginScreen = ({ navigation }) => {
    const [emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [showPassword, setshowPassword] = useState(false);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [customError, setCustomerror] = useState('');

    const handelLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredentials) => {

                var user = userCredentials.user;
                console.log("Login successful");
                // console.log(user);

                navigation.navigate('welcome')
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
                if (errorMessage === "Firebase: The email address is badly formatted.(auth/invalid-email).") {
                    setCustomerror("Please enter a valid email address")
                } else {
                    setCustomerror("Incorrect email and password")
                }
            })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.head1}>Sign In</Text>
            {customError != '' && <Text style={styles.errormsg}>{customError}</Text>}
            <View style={styles.inputout}>
                <AntDesign name="user" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder='Email'
                    onFocus={() => {
                        setEmailfocus(true)
                        setPasswordfocus(false)
                        setshowPassword(false)
                        setCustomerror('')
                    }}
                    onChangeText={(text) => { setEmail(text) }}
                />
            </View>
            <View style={styles.inputout}>
                <MaterialCommunityIcons name='lock-outline' size={24} color={passwordfocus === true ? colors.text1 : colors.text2} /><TextInput style={styles.input} placeholder='password'
                    onFocus={() => {
                        setEmailfocus(false)
                        setPasswordfocus(true)
                        setCustomerror('')
                    }}
                    onChangeText={(text) => { setPassword(text) }}
                    secureTextEntry={showPassword === false ? true : false}
                />
                <Octicons name={showPassword == false ? "eye-closed" : "eye"} size={24} color="black" onPress={() => setshowPassword(!showPassword)} />
            </View>
            <TouchableOpacity style={btn1} onPress={() => handelLogin()}>
                <Text style={{ color: colors.coll, fontSize: title.btntxt, fontWeight: "bold" }}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.forgot}>Forgot Password?</Text>
            <Text style={styles.or}>or</Text>
            <Text style={styles.gftxt}>Sign In With</Text>

            <View style={styles.gf}>

                <TouchableOpacity>
                    <View style={styles.gficon}>
                        <AntDesign name="google" size={24} color="#EA4335" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.gficon}>
                        <FontAwesome5 name="facebook-f" size={24} color="#4267B2" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={horizon}></View>
            <Text >Don't have a account?
                <Text style={styles.signup} onPress={() => navigation.navigate('signup')}> Sign up</Text>
            </Text>

        </View >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    head1: {
        fontSize: title.title1,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 10
    },
    inputout: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 10,
        backgroundColor: colors.coll,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 20,
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '80%',
    },
    forgot: {
        color: colors.text2,
        marginTop: 20,
        marginBottom: 10,
    },
    or: {
        color: colors.text1,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    gftxt: {
        color: colors.text2,
        marginVertical: 10,
        fontSize: 25,
    },
    gf: {
        flexDirection: 'row',
    },
    gficon: {
        backgroundColor: 'white',
        width: 50,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 30
    },
    signup: {
        color: colors.text1
    }

})