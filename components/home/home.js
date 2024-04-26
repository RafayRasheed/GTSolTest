import { FlatList, Image, SafeAreaView, ScrollView, SectionList, StatusBar, StyleSheet, Text, View } from "react-native";
import { Spacer, StatusbarH, myHeight, myWidth } from "../common";
import { myColors } from "../../utils/myColors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { myFontSize, myFonts, myLetSpacing } from "../../utils/myFonts";
import { Categories, Data } from "../data";
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";

export const HomeScreen = ({ navigation }) => {

    const [activeCat, setActiveCat] = useState(1)


    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>
                <StatusbarH />
                <ScrollView>

                    <Spacer paddingT={myHeight(4)} />
                    <View style={{ paddingHorizontal: myWidth(6) }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{

                            }} activeOpacity={0.6} onPress={() => null}>


                                <Image style={{
                                    height: myHeight(4.5), width: myHeight(4.5),
                                    resizeMode: 'contain',
                                }} source={require('../assets/homeW.png')} />
                            </TouchableOpacity>
                            <View style={{
                                height: myHeight(4.5), width: myHeight(4.5),
                                borderRadius: myWidth(2.5), overflow: 'hidden'
                            }}>
                                <Image style={{
                                    height: '100%', width: '100%',
                                    resizeMode: 'contain',
                                }} source={require('../assets/rafay.jpg')} />
                            </View>



                        </View>

                        <Spacer paddingT={myHeight(4)} />
                        <Text
                            style={[styles.textCommon, {
                                fontSize: myFontSize.xMedium,
                                fontFamily: myFonts.heading,
                            }]}>Find the best{'\n'}coffee for you</Text>
                        <Spacer paddingT={myHeight(3)} />


                        <TouchableOpacity activeOpacity={0.8} style={{
                            borderRadius: myWidth(100), backgroundColor: myColors.offColor,
                            flexDirection: 'row', paddingHorizontal: myWidth(5), paddingVertical: myHeight(1.5),
                            alignItems: 'center',
                        }}>

                            <Image style={{
                                height: myHeight(2.8), width: myHeight(2.8),
                                resizeMode: 'contain',
                            }} source={require('../assets/search.png')} />
                            <Spacer paddingEnd={myWidth(5)} />

                            <Text
                                style={[styles.textCommon, {
                                    fontSize: myFontSize.xSmall,
                                    fontFamily: myFonts.bodyBold,
                                    color: myColors.textL
                                }]}>Find Your Coffee...</Text>


                        </TouchableOpacity>



                    </View>

                    <Spacer paddingT={myHeight(3)} />
                    {/* <SectionList
                    sections={DATA}
                    style={{
                        paddingHorizontal: myWidth(6)
                    }}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => (
                        null
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text
                            style={[styles.textCommon, {
                                fontSize: myFontSize.xSmall,
                                fontFamily: myFonts.bodyBold,
                                color: myColors.textL
                            }]}>{title}</Text>
                    )}
                /> */}
                    <View>

                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}

                            contentContainerStyle={{
                                // flexGrow: 1,
                                paddingHorizontal: myWidth(6)
                            }}

                            data={Categories}
                            keyExtractor={(item, index) => index}

                            renderItem={({ item, index }) => {

                                return (
                                    <TouchableOpacity activeOpacity={0.8} style={{ marginEnd: myWidth(6) }} onPress={() => {

                                        setActiveCat(item.id)
                                    }}>

                                        <View style={{ alignItems: 'center' }}>

                                            <Text
                                                style={[styles.textCommon, styles.textCat]}>{item.name}</Text>
                                            <Spacer paddingT={myHeight(1)} />

                                            <View style={[styles.dot, { backgroundColor: activeCat == item.id ? myColors.primaryT : myColors.background, }]} />
                                        </View>
                                    </TouchableOpacity>
                                )

                            }
                            }


                        />
                    </View>
                    <Spacer paddingT={myHeight(1.5)} />

                    {
                        Data.map((it) => {
                            return (
                                <View key={it.catId}>
                                    <Spacer paddingT={myHeight(1)} />

                                    <Text numberOfLines={1}
                                        style={[styles.textCommon, {
                                            fontSize: myFontSize.body3,
                                            fontFamily: myFonts.bodyBold, paddingHorizontal: myWidth(6),
                                            color: myColors.text
                                        }]}>{it.catName}</Text>
                                    <Spacer paddingT={myHeight(2.5)} />

                                    <FlatList
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}

                                        contentContainerStyle={{
                                            paddingHorizontal: myWidth(6)
                                        }}

                                        data={it.data}
                                        keyExtractor={(item, index) => index}

                                        renderItem={({ item, index }) => {

                                            return (
                                                <TouchableOpacity activeOpacity={0.8} style={{
                                                    marginEnd: myWidth(5)
                                                }} onPress={() => {
                                                    navigation.navigate('ItemDetail', { item })
                                                }}>

                                                    <LinearGradient
                                                        // start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                                        // locations={[0, 0.5, 0.6]}

                                                        useAngle={true} angle={135} angleCenter={{ x: 1, y: 0.1 }}
                                                        colors={[myColors.offColor2, myColors.offColor2, myColors.offColor3]}
                                                        style={{ borderRadius: myWidth(5.5), padding: myWidth(4), overflow: 'hidden', }}>

                                                        <View style={{
                                                            height: myWidth(32), width: myWidth(32),
                                                            borderRadius: myWidth(4), overflow: 'hidden'
                                                        }}>

                                                            <Image style={{
                                                                height: '100%', width: '100%',
                                                                resizeMode: 'cover',
                                                            }} source={item.image} />
                                                            <View style={{
                                                                position: 'absolute', right: 0,
                                                                paddingVertical: myHeight(0.8), paddingHorizontal: myWidth(4),
                                                                flexDirection: 'row', alignItems: 'center',
                                                                zIndex: 1, backgroundColor: "#00000080", borderBottomLeftRadius: myWidth(100)
                                                            }}>
                                                                <Image style={{
                                                                    height: myWidth(3.3), width: myWidth(3.3),
                                                                    resizeMode: 'contain',
                                                                    tintColor: myColors.primaryT,
                                                                    marginTop: -myWidth(0.2)
                                                                }} source={require('../assets/star.png')} />
                                                                <Spacer paddingEnd={myWidth(1.5)} />

                                                                <Text numberOfLines={1}
                                                                    style={[styles.textCommon, {
                                                                        fontSize: myFontSize.small3,
                                                                        fontFamily: myFonts.body,
                                                                        color: myColors.text
                                                                    }]}>{item.rating}</Text>
                                                            </View>
                                                        </View>

                                                        <Spacer paddingT={myHeight(1.4)} />

                                                        <Text numberOfLines={1}
                                                            style={[styles.textCommon, {
                                                                fontSize: myFontSize.body,
                                                                fontFamily: myFonts.body,
                                                                color: myColors.text
                                                            }]}>{item.name}</Text>

                                                        <Spacer paddingT={myHeight(0.5)} />

                                                        <Text numberOfLines={1}
                                                            style={[styles.textCommon, {
                                                                fontSize: myFontSize.small,
                                                                fontFamily: myFonts.body,
                                                                color: myColors.text
                                                            }]}>{item.line2}</Text>
                                                        <Spacer paddingT={myHeight(1)} />

                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <Text numberOfLines={1}
                                                                style={[styles.textCommon, {
                                                                    fontSize: myFontSize.body3,
                                                                    fontFamily: myFonts.heading,
                                                                    color: myColors.text,
                                                                    flex: 1
                                                                }]}><Text style={{
                                                                    color: myColors.primaryT
                                                                }}>$</Text> {item.price}</Text>

                                                            <TouchableOpacity activeOpacity={0.8} style={{
                                                                height: myWidth(6.6), width: myWidth(6.6),
                                                                resizeMode: 'cover', borderRadius: myWidth(1),
                                                                backgroundColor: myColors.primaryT,
                                                                justifyContent: 'center', alignItems: 'center'
                                                            }} onPress={() => {
                                                            }}>
                                                                <Image style={{
                                                                    height: myWidth(3), width: myWidth(3),
                                                                    resizeMode: 'contain',
                                                                }} source={require('../assets/plus.png')} />
                                                            </TouchableOpacity>
                                                        </View>

                                                        <Spacer paddingT={myHeight(1)} />


                                                    </LinearGradient>

                                                </TouchableOpacity>
                                            )

                                        }
                                        }


                                    />
                                    <Spacer paddingT={myHeight(1)} />

                                </View>


                            )
                        })
                    }


                    <View style={{ paddingHorizontal: myWidth(6) }}>

                    </View>
                </ScrollView>


            </SafeAreaView>



        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background
    },
    dot: {
        borderRadius: myHeight(100), height: myHeight(1.6), width: myHeight(1.6)
    },
    textCat: {
        fontSize: myFontSize.body3,
        fontFamily: myFonts.bodyBold,
        color: myColors.textL
    },

    //Text
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    }

})