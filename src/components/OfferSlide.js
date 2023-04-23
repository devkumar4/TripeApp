import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import React from 'react'
import { colors } from '../Globals/styles'

const OfferSlide = () => {
  return (
    <View>
      <View style={styles.OfferSlider}>
        <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true} dotColor={colors
          .text2} activeDotColor={colors.text1}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          prevButton={<Text style={styles.buttonText}>‹</Text>}>
          <View style={styles.slide}>
            <Image source={require('../../assets/Offerslider/img1.png')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/Offerslider/img1.png')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/Offerslider/img2.png')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/Offerslider/img3.png')} style={styles.image} />
          </View>
        </Swiper>
      </View>
    </View >
  )
}

export default OfferSlide

const styles = StyleSheet.create({

  OfferSlider: {
    width: '100%',
    height: 200,
    backgroundColor: colors.coll,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  slide: {
    width: '100%',
    height: 200,
    backgroundColor: colors.coll,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: "100%",
    borderRadius: 20,
  },
  buttonText: {
    color: colors.text1,
    fontSize: 40,
    fontWeight: "500",
    backgroundColor: colors.coll,
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: "center",
    lineHeight: 40

  }


})