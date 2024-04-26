import { FlatList, Image, SafeAreaView, ScrollView, SectionList, StatusBar, StyleSheet, Text, View } from "react-native";
import { Spacer, StatusbarH, myHeight, myWidth } from "../common";
import { myColors } from "../../utils/myColors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { myFontSize, myFonts, myLetSpacing } from "../../utils/myFonts";
import { Categories, Data, cart } from "../data";
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";

export const Cart = ({ navigation, route }) => {

    const item = {}
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>

                <StatusbarH />
                <ScrollView nestedScrollEnabled style={{ flex: 1, backgroundColor: myColors.background }}>
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

                            <Text numberOfLines={1}
                                style={[styles.textCommon, {
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.bodyBold,
                                    color: myColors.text
                                }]}>Cart</Text>
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

                        <FlatList
                            showsHorizontalScrollIndicator={false}

                            contentContainerStyle={{
                                // flexGrow: 1,
                            }}

                            data={cart}
                            keyExtractor={(item, index) => index}

                            renderItem={({ item, index }) => {
                                if (item.subItems) {
                                    return (
                                        <TouchableOpacity disabled key={index} activeOpacity={0.8}
                                            style={{ borderRadius: myWidth(5), marginTop: myHeight(2.1), overflow: 'hidden' }}
                                        >


                                            <LinearGradient
                                                // start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                                // locations={[0, 0.5, 0.6]}

                                                useAngle={true} angle={135} angleCenter={{ x: 1, y: 0.8 }}
                                                colors={[myColors.offColor2, myColors.offColor3, myColors.offColor3]}
                                                style={{ borderRadius: myWidth(5.5), paddingHorizontal: myWidth(3), paddingVertical: myHeight(1.5), overflow: 'hidden', }}>
                                                <View style={{
                                                    flexDirection: 'row',

                                                }}>
                                                    <Image style={{
                                                        height: myHeight(14), width: myHeight(14), borderRadius: myWidth(5),
                                                        resizeMode: 'cover',
                                                    }} source={item.image} />
                                                    <Spacer paddingEnd={myWidth(5)} />
                                                    <View style={{ flex: 1 }}>

                                                        <Text numberOfLines={1}
                                                            style={[styles.textCommon, {
                                                                fontSize: myFontSize.body3,
                                                                fontFamily: myFonts.body,
                                                                color: myColors.text
                                                            }]}>{item.name}</Text>

                                                        <Spacer paddingT={myHeight(0.5)} />

                                                        <Text numberOfLines={1}
                                                            style={[styles.textCommon, {
                                                                fontSize: myFontSize.tiny,
                                                                fontFamily: myFonts.body,
                                                                color: myColors.text

                                                            }]}>{item.line2}</Text>
                                                        <Spacer paddingT={myHeight(3.5)} />

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
                                                <Spacer paddingT={myHeight(1)} />

                                                {item.subItems.map((sub, ind3) => {

                                                    return (
                                                        <View style={{
                                                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: myWidth(1.5)
                                                        }} key={ind3}>
                                                            <View style={{ width: myWidth(36), height: myHeight(5), marginTop: myHeight(1), flexDirection: 'row', alignItems: 'center', }}>
                                                                <View style={{ width: '44%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: myColors.background, borderRadius: myWidth(2) }}>
                                                                    <Text numberOfLines={1}
                                                                        style={[styles.textCommon, {
                                                                            fontSize: myFontSize.small,
                                                                            fontFamily: myFonts.body,
                                                                            color: myColors.text,

                                                                        }]}>{sub.size}</Text>
                                                                </View>

                                                                <View style={{ width: '60%', alignItems: 'center', }}>
                                                                    <Text numberOfLines={1}
                                                                        style={[styles.textCommon, {
                                                                            fontSize: myFontSize.body3,
                                                                            fontFamily: myFonts.heading,
                                                                            color: myColors.text,

                                                                        }]}><Text style={{
                                                                            color: myColors.primaryT
                                                                        }}>$</Text> {sub.price}.00</Text>
                                                                </View>

                                                            </View>
                                                            <View style={{
                                                                flexDirection: 'row', alignItems: 'center',
                                                            }}>

                                                                <TouchableOpacity activeOpacity={0.8} style={{
                                                                    height: myWidth(6.8)
                                                                    , width: myWidth(6.8)
                                                                    ,
                                                                    resizeMode: 'cover', borderRadius: myWidth(1),
                                                                    backgroundColor: myColors.primaryT,
                                                                    justifyContent: 'center', alignItems: 'center'
                                                                }} onPress={() => {
                                                                }}>
                                                                    <Image style={{
                                                                        height: myWidth(3), width: myWidth(3),
                                                                        resizeMode: 'contain',
                                                                    }} source={require('../assets/minus.png')} />
                                                                </TouchableOpacity>
                                                                <Spacer paddingEnd={myWidth(4)} />

                                                                <View activeOpacity={0.8} style={{
                                                                    height: myWidth(6.8)
                                                                    , width: myWidth(12),
                                                                    borderRadius: myWidth(1.4),
                                                                    backgroundColor: myColors.background,
                                                                    justifyContent: 'center', alignItems: 'center',
                                                                    borderWidth: myWidth(0.15), borderColor: myColors.primaryT
                                                                }} onPress={() => {
                                                                }}>

                                                                    <Text numberOfLines={1}
                                                                        style={[styles.textCommon, {
                                                                            fontSize: myFontSize.body,
                                                                            fontFamily: myFonts.heading,
                                                                            color: myColors.text,
                                                                        }]}>{sub.quantity}</Text>
                                                                </View>
                                                                <Spacer paddingEnd={myWidth(4)} />

                                                                <TouchableOpacity activeOpacity={0.8} style={{
                                                                    height: myWidth(6.8)
                                                                    , width: myWidth(6.8)
                                                                    ,
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



                                                        </View>
                                                    )

                                                })

                                                }
                                            </LinearGradient>

                                        </TouchableOpacity>
                                    )
                                }
                                return (
                                    <TouchableOpacity disabled key={index} activeOpacity={0.8}
                                        style={{ borderRadius: myWidth(5), marginTop: myHeight(2.1), overflow: 'hidden' }}
                                    >


                                        <LinearGradient
                                            // start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                            // locations={[0, 0.5, 0.6]}

                                            useAngle={true} angle={135} angleCenter={{ x: 1, y: 0.8 }}
                                            colors={[myColors.offColor2, myColors.offColor3, myColors.offColor3]}
                                            style={{ borderRadius: myWidth(5.5), paddingHorizontal: myWidth(3), paddingVertical: myHeight(1.5), overflow: 'hidden', }}>
                                            <View style={{
                                                flexDirection: 'row',

                                            }}>
                                                <Image style={{
                                                    height: myHeight(18), width: myHeight(18), borderRadius: myWidth(5),
                                                    resizeMode: 'cover',
                                                }} source={item.image} />
                                                <Spacer paddingEnd={myWidth(5)} />
                                                <View style={{ flex: 1 }}>

                                                    <Text numberOfLines={1}
                                                        style={[styles.textCommon, {
                                                            fontSize: myFontSize.body3,
                                                            fontFamily: myFonts.body,
                                                            color: myColors.text
                                                        }]}>{item.name}</Text>

                                                    <Spacer paddingT={myHeight(0.5)} />

                                                    <Text numberOfLines={1}
                                                        style={[styles.textCommon, {
                                                            fontSize: myFontSize.tiny,
                                                            fontFamily: myFonts.body,
                                                            color: myColors.text

                                                        }]}>{item.line2}</Text>
                                                    <Spacer paddingT={myHeight(0.5)} />

                                                    <View style={{ width: '100%', height: myHeight(5), marginTop: myHeight(1), flexDirection: 'row', alignItems: 'center', }}>
                                                        <View style={{ width: '44%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: myColors.background, borderRadius: myWidth(2) }}>
                                                            <Text numberOfLines={1}
                                                                style={[styles.textCommon, {
                                                                    fontSize: myFontSize.small,
                                                                    fontFamily: myFonts.body,
                                                                    color: myColors.text,

                                                                }]}>{item.size}</Text>
                                                        </View>

                                                        <View style={{ width: '60%', alignItems: 'center', }}>
                                                            <Text numberOfLines={1}
                                                                style={[styles.textCommon, {
                                                                    fontSize: myFontSize.body3,
                                                                    fontFamily: myFonts.heading,
                                                                    color: myColors.text,

                                                                }]}><Text style={{
                                                                    color: myColors.primaryT
                                                                }}>$</Text> {item.total}</Text>
                                                        </View>

                                                    </View>

                                                    <Spacer paddingT={myHeight(1)} />

                                                    <View style={{
                                                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                                                    }}>

                                                        <TouchableOpacity activeOpacity={0.8} style={{
                                                            height: myWidth(6.8)
                                                            , width: myWidth(6.8)
                                                            ,
                                                            resizeMode: 'cover', borderRadius: myWidth(1),
                                                            backgroundColor: myColors.primaryT,
                                                            justifyContent: 'center', alignItems: 'center'
                                                        }} onPress={() => {
                                                        }}>
                                                            <Image style={{
                                                                height: myWidth(3), width: myWidth(3),
                                                                resizeMode: 'contain',
                                                            }} source={require('../assets/minus.png')} />
                                                        </TouchableOpacity>
                                                        <Spacer paddingEnd={myWidth(4)} />

                                                        <View activeOpacity={0.8} style={{
                                                            height: myWidth(6.8)
                                                            , width: myWidth(12),
                                                            borderRadius: myWidth(1.4),
                                                            backgroundColor: myColors.background,
                                                            justifyContent: 'center', alignItems: 'center',
                                                            borderWidth: myWidth(0.15), borderColor: myColors.primaryT
                                                        }} onPress={() => {
                                                        }}>

                                                            <Text numberOfLines={1}
                                                                style={[styles.textCommon, {
                                                                    fontSize: myFontSize.body,
                                                                    fontFamily: myFonts.heading,
                                                                    color: myColors.text,
                                                                }]}>{item.quantity}</Text>
                                                        </View>
                                                        <Spacer paddingEnd={myWidth(4)} />

                                                        <TouchableOpacity activeOpacity={0.8} style={{
                                                            height: myWidth(6.8)
                                                            , width: myWidth(6.8)
                                                            ,
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


                                                </View>


                                            </View>

                                            <Spacer paddingT={myHeight(1)} />



                                        </LinearGradient>

                                    </TouchableOpacity>
                                )

                            }
                            }


                        />

                    </View>

                </ScrollView >


                {/* Bottom */}
                < View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                    backgroundColor: myColors.background, paddingHorizontal: myWidth(5), paddingBottom: myHeight(3), paddingTop: myHeight(2)
                }
                }>
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
                            }}>$</Text> 10.52</Text>
                    </View>

                    {/* Cat */}
                    <TouchableOpacity activeOpacity={0.8} style={{
                        backgroundColor: myColors.primaryT,
                        borderRadius: myWidth(2), justifyContent: 'center', alignItems: 'center',
                        width: myWidth(60), paddingVertical: myHeight(1.8)
                    }} onPress={() => navigation.navigate('Payment')}>


                        <Text numberOfLines={1}
                            style={[styles.textCommon, {
                                fontSize: myFontSize.xBody,
                                fontFamily: myFonts.bodyBold,
                                color: myColors.text
                            }]}>Pay</Text>
                    </TouchableOpacity>

                </View >
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