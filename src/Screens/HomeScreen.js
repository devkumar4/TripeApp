import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeHeadNav from '../../src/components/HomeHeadNav'
import Categories from '../components/Categories'
import OfferSlide from '../components/OfferSlide'
import { SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '../Globals/styles'
import { firebase } from "../../Firebase/firebaseConfig"
import Slider from '../components/Slider'
import { AntDesign } from "@expo/vector-icons"
import BottomNav from '../components/BottomNav'

// import firestore from '@react-native-firebase/firestore'

const HomeScreen = ({ navigation }) => {
  const [foodData, setfoodData] = useState([]);
  const [VegData, setVegData] = useState([]);
  const [NonVegData, setNonVegData] = useState([]);
  const FoodRef = firebase.firestore().collection('foodData')

  useEffect(() => {
    FoodRef.onSnapshot(snapshot => {
      setfoodData(snapshot.docs.map(doc => doc.data()));
    })
  }, [])

  useEffect(() => {
    setVegData(foodData.filter(item => item.foodType == "veg"))
    setNonVegData(foodData.filter(item => item.foodType == "non-veg"))

  }, [foodData])


  const [Search, setSearch] = useState('')
  return (
    <>
      <View style={styles.container}>
        <StatusBar />
        <HomeHeadNav navigation={navigation} />
        <View style={styles.bottomnav}>
          <BottomNav navigation={navigation} />
        </View>

        <ScrollView>
          <View style={styles.searchbox}>
            <SimpleLineIcons name="magnifier" size={24} color="black" style={styles.searchicon} />
            <TextInput style={styles.input} placeholder='Search...' onChangeText={(text) => { setSearch(text) }} />
          </View>
          {Search != '' && <View style={styles.seacrhresultsouter}>
            <FlatList style={styles.searchresultsinner} data={foodData} renderItem={({ item }) => {
              if (item.FoodName.toLowerCase().includes(Search.toLocaleLowerCase())) {
                return (
                  <View style={styles.searchresult}>
                    <AntDesign name="arrowright" size={24} color="black" />
                    <Text style={styles.searchresulttext}>{item.FoodName}</Text>
                  </View>
                )
              }
            }} />
          </View>}
          <Categories />
          <OfferSlide />
          <Slider title={"Today's Special 🍔"} data={foodData} navigation={navigation} />
          <Slider title={"NonVeg Lover's "} data={NonVegData} navigation={navigation} />
          <Slider title={"Veg Lover's ❤️"} data={VegData} navigation={navigation} />
        </ScrollView>
      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.coll,
    // alignItems: "center",
    width: '100%',
  },
  searchbox: {
    flexDirection: 'row',
    width: "90%",
    backgroundColor: colors.coll,
    borderRadius: 30,
    alignItems: "center",
    padding: 10,
    margin: 20,
    elevation: 10
  },
  input: {
    marginLeft: 10,
    width: "90%",
    fontSize: 18,
    color: colors.text1
  },
  searchicon: {
    color: colors.text1,
  },
  seacrhresultsouter: {
    width: '100%',
    marginHorizontal: 30,
    height: '100%',
    backgroundColor: colors.col1,
  },
  searchresultsinner: {
    width: '100%',
  },
  searchresult: {
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    padding: 5,
  },
  searchresulttext: {
    marginLeft: 10,
    fontSize: 18,
    color: colors.text1,
  },
  bottomnav: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    backgroundColor: colors.coll,
    zIndex: 20,
  }
})