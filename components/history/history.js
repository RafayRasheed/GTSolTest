import { FlatList, Image, SafeAreaView, ScrollView, SectionList, StatusBar, StyleSheet, Text, View } from "react-native";
import { Spacer, StatusbarH, myHeight, myWidth } from "../common";
import { myColors } from "../../utils/myColors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { myFontSize, myFonts, myLetSpacing } from "../../utils/myFonts";
import { Categories, Data, history } from "../data";
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";

export const History = ({ navigation, route }) => {

    const item = {}


    return (

        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>


                <StatusbarH />
                <ScrollView style={{ flex: 1, backgroundColor: myColors.background, paddingHorizontal: myWidth(6) }}>
                    <Spacer paddingT={myHeight(4)} />

                    <View style={{ paddingHorizontal: myWidth(0) }}>

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
                                }]}>Order History</Text>
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



                    </View>
                    <Spacer paddingT={myHeight(2)} />



                    {
                        history.map((it, index) => {
                            return (
                                <View key={index}>
                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                                        marginTop: myHeight(2.1),
                                    }}>
                                        <View style={{}}>
                                            <Text numberOfLines={1}
                                                style={[styles.textCommon, {
                                                    fontSize: myFontSize.body2,
                                                    fontFamily: myFonts.bodyBold,
                                                    color: myColors.text,

                                                }]}>Order Date</Text>
                                            <Spacer paddingT={myHeight(0.2)} />

                                            <Text numberOfLines={1}
                                                style={[styles.textCommon, {
                                                    fontSize: myFontSize.body,
                                                    fontFamily: myFonts.body,
                                                    color: myColors.textL2
                                                }]}>{it.date}</Text>



                                        </View>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Text numberOfLines={1}
                                                style={[styles.textCommon, {
                                                    fontSize: myFontSize.body2,
                                                    fontFamily: myFonts.bodyBold,
                                                    color: myColors.text,

                                                }]}>Total Amount</Text>
                                            <Spacer paddingT={myHeight(0.2)} />

                                            <Text numberOfLines={1}
                                                style={[styles.textCommon, {
                                                    fontSize: myFontSize.body,
                                                    fontFamily: myFonts.body,
                                                    color: myColors.primaryT,

                                                }]}>$ {it.totalAmount}</Text>

                                        </View>
                                    </View>
                                    {

                                        it.items.map((it2, ind2) => {
                                            return (

                                                <TouchableOpacity disabled key={ind2} activeOpacity={0.8}
                                                    style={{ borderRadius: myWidth(5), marginTop: myHeight(2.1), overflow: 'hidden' }}
                                                >


                                                    <LinearGradient
                                                        // start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                                                        // locations={[0, 0.5, 0.6]}

                                                        useAngle={true} angle={135} angleCenter={{ x: 1, y: 0.8 }}
                                                        colors={[myColors.offColor2, myColors.offColor3, myColors.offColor3]}
                                                        style={{ borderRadius: myWidth(5.5), paddingHorizontal: myWidth(4.5), paddingVertical: myHeight(1.8), overflow: 'hidden', }}>
                                                        <View style={{
                                                            flexDirection: 'row', alignItems: 'center'

                                                        }}>
                                                            <Image style={{
                                                                height: myHeight(9.2), width: myHeight(9.2), borderRadius: myWidth(5),
                                                                resizeMode: 'cover',
                                                            }} source={it2.image} />
                                                            <Spacer paddingEnd={myWidth(5)} />
                                                            <View style={{ flex: 1 }}>

                                                                <Text numberOfLines={1}
                                                                    style={[styles.textCommon, {
                                                                        fontSize: myFontSize.body3,
                                                                        fontFamily: myFonts.body,
                                                                        color: myColors.text
                                                                    }]}>{it2.name}</Text>

                                                                <Spacer paddingT={myHeight(0.5)} />

                                                                <Text numberOfLines={1}
                                                                    style={[styles.textCommon, {
                                                                        fontSize: myFontSize.tiny,
                                                                        fontFamily: myFonts.body,
                                                                        color: myColors.text

                                                                    }]}>{it2.line2}</Text>
                                                            </View>
                                                            <Text numberOfLines={1}
                                                                style={[styles.textCommon, {
                                                                    fontSize: myFontSize.xBody2,
                                                                    fontFamily: myFonts.heading,
                                                                    color: myColors.text,

                                                                }]}><Text style={{
                                                                    color: myColors.primaryT
                                                                }}>$</Text> {it2.total}</Text>
                                                        </View>
                                                        <Spacer paddingT={myHeight(1)} />

                                                        {it2.subItems.map((sub, ind3) => {

                                                            return (
                                                                <View style={{
                                                                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                                                                }} key={ind3}>
                                                                    <View style={{ width: myWidth(36), height: myHeight(5), marginTop: myHeight(1), flexDirection: 'row', alignItems: 'center', backgroundColor: myColors.background, borderRadius: myWidth(4) }}>
                                                                        <View style={{ width: '40%', height: '100%', justifyContent: 'center', alignItems: 'center', borderEndWidth: myWidth(0.15), borderColor: myColors.textL }}>
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

                                                                    <Text numberOfLines={1}
                                                                        style={[styles.textCommon, {
                                                                            fontSize: myFontSize.body3,
                                                                            fontFamily: myFonts.heading,
                                                                            color: myColors.text,

                                                                        }]}><Text style={{
                                                                            color: myColors.primaryT
                                                                        }}>X</Text> {sub.quantity}</Text>



                                                                    <Text numberOfLines={1}
                                                                        style={[styles.textCommon, {
                                                                            fontSize: myFontSize.body3,
                                                                            fontFamily: myFonts.heading,
                                                                            color: myColors.primaryT,

                                                                        }]}>{sub.total}.00</Text>

                                                                </View>
                                                            )
                                                        })
                                                        }
                                                    </LinearGradient>

                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>

                            )
                        })
                    }

                    <Spacer paddingT={myHeight(2)} />
                </ScrollView>

            </SafeAreaView>

            {/* Bottom */}
            <View style={{

                backgroundColor: myColors.background, paddingHorizontal: myWidth(5), paddingBottom: myHeight(3), paddingTop: myHeight(2)
            }}>


                {/* Cat */}
                <TouchableOpacity activeOpacity={0.8} style={{
                    backgroundColor: myColors.primaryT,
                    borderRadius: myWidth(5), justifyContent: 'center', alignItems: 'center',
                    width: myWidth(90), paddingVertical: myHeight(2.1)
                }}>


                    <Text numberOfLines={1}
                        style={[styles.textCommon, {
                            fontSize: myFontSize.body4,
                            fontFamily: myFonts.heading,
                            color: myColors.text
                        }]}>Download</Text>
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