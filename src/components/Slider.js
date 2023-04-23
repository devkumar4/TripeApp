import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { nonveg, veg, colors } from '../Globals/styles'


const Slider = ({ title, data, navigation }) => {
    // console.log(title);

    const openProductpage = (item) => {
        // console.log(item);
        navigation.navigate('product', item)

    }
    return (
        <View style={styles.container}>
            <Text style={styles.cardoutead}>
                {title}
            </Text>

            <FlatList style={styles.cardsout}
                horizontal
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.index} onPress={() => {
                        openProductpage(item);
                    }}>
                        <View style={styles.card}>
                            <View style={styles.s1}>
                                <Image source={{
                                    uri: item.FoodImageUrl
                                }} style={styles.cardimgin} />
                            </View>
                            <View style={styles.s2}>
                                <Text style={styles.txt1}>{item.FoodName}</Text>
                                <View style={styles.s2in}>
                                    <Text style={styles.txt2}>Rs.{item.FoodPrice}-/</Text>
                                    {item.foodType === 'veg' ? <Text style={veg}></Text> : <Text style={nonveg}></Text>}
                                </View>
                            </View>
                            <View style={styles.s3}>
                                <Text style={styles.buybtn}
                                >Buy</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    container: {
        marginVertical: 0,
    },
    cardoutead: {
        color: colors.text3,
        width: "100%",
        fontSize: 30,
        fontWeight: '300',
        borderRadius: 10,
        marginHorizontal: 10,
        // textAlign
    },
    cardsout: {
        width: "100%",
        // backgroundColor: 'red'

    },
    card: {
        width: 350,
        height: 290,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#e8e8e8",
        backgroundColor: colors.coll,

    },
    cardimgin: {
        width: "100%",
        height: 200,
        borderRadius: 10
    },
    s2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
    },
    txt1: {
        fontSize: 18,
        color: colors.text3,
        marginHorizontal: 5,
        width: 150
    },
    txt2: {
        fontSize: 20,
        color: colors.text2,
        marginRight: 10
    },
    s2in: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10
    },
    s3: {
        alignItems: "center",
        position: "absolute",
        bottom: 1,
        width: "100%",
    },
    buybtn: {
        backgroundColor: colors.text1,
        color: colors.coll,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        borderRadius: 10,
        width: "90%",
        textAlign: "center",
    }
})