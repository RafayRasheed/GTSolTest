import { FlatList, Image, SafeAreaView, ScrollView, SectionList, StatusBar, StyleSheet, Text, View } from "react-native";
import { Spacer, StatusbarH, myHeight, myWidth } from "../common";
import { myColors } from "../../utils/myColors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { myFontSize, myFonts, myLetSpacing } from "../../utils/myFonts";
import { Categories, Data } from "../data";
import { useState } from "react";

export const ItemDetail = ({ navigation, route }) => {
    const { item } = route.params
    const [activeSize, setActiveSize] = useState(item.size ? item.size[0] : null)


    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: myColors.background }}>
                {/* Top PIC and content  */}
                <View style={{
                    height: myHeight(68), width: myWidth(100),
                    overflow: 'hidden'
                }}>

                    <Image style={{
                        height: '100%', width: '100%',
                        resizeMode: 'cover',
                    }} source={item.image} />

                    <View style={{
                        position: 'absolute',
                        paddingHorizontal: myWidth(5), width: '100%',
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                        zIndex: 1, top: StatusBar.currentHeight + myHeight(1)
                    }}>
                        <TouchableOpacity style={{

                        }} activeOpacity={0.6} onPress={() => navigation.goBack()}>

                            <Image style={{
                                height: myHeight(4.5), width: myHeight(4.5),
                                resizeMode: 'contain',
                            }} source={require('../assets/back.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: myColors.offColor,
                            borderRadius: myWidth(2), justifyContent: 'center', alignItems: 'center',
                            height: myHeight(4.5), width: myHeight(4.5),
                        }} activeOpacity={0.6} onPress={() => null}>

                            <Image style={{
                                height: myHeight(2.5), width: myHeight(2.5),
                                resizeMode: 'contain', tintColor: myColors.red,
                            }} source={require('../assets/heart.png')} />
                        </TouchableOpacity>

                    </View>


                    <View style={{
                        position: 'absolute',
                        paddingHorizontal: myWidth(5), width: '100%',
                        zIndex: 1, bottom: 0, backgroundColor: '#00000060',
                        borderTopStartRadius: myWidth(6),
                        borderTopEndRadius: myWidth(6),
                        paddingVertical: myHeight(2)

                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                            <View>
                                <Text numberOfLines={1}
                                    style={[styles.textCommon, {
                                        fontSize: myFontSize.medium,
                                        fontFamily: myFonts.heading,
                                        color: myColors.text
                                    }]}>{item.name}</Text>

                                {/* <Spacer paddingT={myHeight(0.5)} /> */}

                                <Text numberOfLines={1}
                                    style={[styles.textCommon, {
                                        fontSize: myFontSize.small2,
                                        fontFamily: myFonts.body,
                                        color: myColors.textL2
                                    }]}>{item.line2}</Text>
                            </View>

                            {/* Bean & location */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: myWidth(34) }}>
                                <View style={{
                                    backgroundColor: myColors.offColor,
                                    borderRadius: myWidth(2), justifyContent: 'center', alignItems: 'center',
                                    height: myHeight(8), width: myHeight(7.5),
                                }}>
                                    <View style={{
                                        justifyContent: 'center', alignItems: 'center',
                                        height: myHeight(4), width: myHeight(4),
                                    }}>

                                        <Image style={{
                                            height: myHeight(4), width: myHeight(4),
                                            resizeMode: 'contain',
                                        }} source={require('../assets/bean.png')} />
                                    </View>

                                    <Text numberOfLines={1}
                                        style={[styles.textCommon, {
                                            fontSize: myFontSize.tiny,
                                            fontFamily: myFonts.bodyBold,
                                            color: myColors.textL2
                                        }]}>{'Bean'}</Text>
                                </View>
                                <View style={{
                                    backgroundColor: myColors.offColor,
                                    borderRadius: myWidth(2), justifyContent: 'center', alignItems: 'center',
                                    height: myHeight(8), width: myHeight(7.5),
                                }}>
                                    <View style={{
                                        justifyContent: 'center', alignItems: 'center',
                                        height: myHeight(4), width: myHeight(4),
                                    }}>

                                        <Image style={{
                                            height: myHeight(3.2), width: myHeight(3.2),
                                            resizeMode: 'contain',
                                        }} source={require('../assets/location.png')} />
                                    </View>

                                    <Text numberOfLines={1}
                                        style={[styles.textCommon, {
                                            fontSize: myFontSize.tiny,
                                            fontFamily: myFonts.bodyBold,
                                            color: myColors.textL2
                                        }]}>{item.location}</Text>
                                </View>
                            </View>
                        </View>
                        <Spacer paddingT={myHeight(1.5)} />

                        {/* Rating & Roasted */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                            <View style={{


                                flexDirection: 'row', alignItems: 'center',

                            }}>
                                <Image style={{
                                    height: myHeight(2.7), width: myHeight(2.7),
                                    resizeMode: 'contain',
                                    tintColor: myColors.primaryT,
                                    marginTop: -myWidth(0.2)
                                }} source={require('../assets/star.png')} />
                                <Spacer paddingEnd={myWidth(2)} />

                                <Text numberOfLines={1}
                                    style={[styles.textCommon, {
                                        fontSize: myFontSize.body3,
                                        fontFamily: myFonts.heading,
                                        color: myColors.text
                                    }]}>{item.rating}</Text>
                                <Text numberOfLines={1}
                                    style={[styles.textCommon, {
                                        fontSize: myFontSize.small,
                                        fontFamily: myFonts.body,
                                        color: myColors.textL2
                                    }]}> ({item.totalRating})</Text>
                            </View>

                            <View style={{
                                backgroundColor: myColors.offColor,
                                borderRadius: myWidth(2), justifyContent: 'center', alignItems: 'center',
                                height: myHeight(6.4), width: myWidth(34), paddingHorizontal: myWidth(2)
                            }}>
                                <Text numberOfLines={1}
                                    style={[styles.textCommon, {
                                        fontSize: myFontSize.tiny,
                                        fontFamily: myFonts.bodyBold,
                                        color: myColors.textL2
                                    }]}>{item.line2}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Spacer paddingT={myHeight(2.5)} />

                <View style={{ paddingHorizontal: myWidth(5) }}>
                    {/* Dceription */}
                    <View>

                        <Text
                            style={[styles.textCommon, {
                                fontSize: myFontSize.body,
                                fontFamily: myFonts.heading,
                                color: myColors.textL2
                            }]}>Description</Text>
                        <Spacer paddingT={myHeight(1.2)} />

                        <Text
                            style={[styles.textCommon, {
                                fontSize: myFontSize.small2,
                                fontFamily: myFonts.body,
                                color: myColors.text
                            }]}>{item.description}</Text>

                    </View>

                    {/* Size */}
                    {item.size &&
                        <>

                            <Spacer paddingT={myHeight(1.2)} />

                            <Text
                                style={[styles.textCommon, {
                                    fontSize: myFontSize.body,
                                    fontFamily: myFonts.heading,
                                    color: myColors.textL2
                                }]}>Size</Text>
                            <Spacer paddingT={myHeight(1.4)} />

                            <View>


                                <FlatList
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}

                                    contentContainerStyle={{
                                        // flexGrow: 1,
                                    }}

                                    data={item.size}
                                    keyExtractor={(item, index) => index}

                                    renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity activeOpacity={0.8} style={{ marginEnd: myWidth(10) }} onPress={() => {

                                                setActiveSize(item)
                                            }}>

                                                <View style={{
                                                    backgroundColor: myColors.offColor, justifyContent: 'center', alignItems: 'center',
                                                    paddingHorizontal: myWidth(4), paddingVertical: myHeight(1), borderRadius: myWidth(2.2),
                                                    borderWidth: myHeight(0.1), borderColor: activeSize == item ? myColors.primaryT : myColors.offColor
                                                }}>

                                                    <Text
                                                        style={[styles.textCommon, styles.textCat]}>{item}</Text>

                                                </View>
                                            </TouchableOpacity>
                                        )

                                    }
                                    }


                                />

                            </View>
                        </>

                    }

                </View>




            </ScrollView>


            {/* Bottom */}
            <View style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                backgroundColor: myColors.background, paddingHorizontal: myWidth(5), paddingBottom: myHeight(3)
            }}>
                <View style={{ alignItems: 'center' }}>
                    <Text numberOfLines={1}
                        style={[styles.textCommon, {
                            fontSize: myFontSize.small2,
                            fontFamily: myFonts.bodyBold,
                            color: myColors.textL2
                        }]}>Price</Text>

                    {/* <Spacer paddingT={myHeight(0.5)} /> */}

                    <Text numberOfLines={1}
                        style={[styles.textCommon, {
                            fontSize: myFontSize.medium,
                            fontFamily: myFonts.heading,
                            color: myColors.text,

                        }]}><Text style={{
                            color: myColors.primaryT
                        }}>$</Text> {item.price}</Text>
                </View>

                {/* Cat */}
                <TouchableOpacity activeOpacity={0.8} style={{
                    backgroundColor: myColors.primaryT,
                    borderRadius: myWidth(2), justifyContent: 'center', alignItems: 'center',
                    width: myWidth(60), paddingVertical: myHeight(1.8)
                }}>


                    <Text numberOfLines={1}
                        style={[styles.textCommon, {
                            fontSize: myFontSize.xBody,
                            fontFamily: myFonts.bodyBold,
                            color: myColors.text
                        }]}>Add To Cart</Text>
                </TouchableOpacity>

            </View>


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