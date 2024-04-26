import { FlatList, Image, SafeAreaView, ScrollView, SectionList, StatusBar, StyleSheet, Text, View } from "react-native";
import { Spacer, StatusbarH, myHeight, myWidth } from "../common";
import { myColors } from "../../utils/myColors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { myFontSize, myFonts, myLetSpacing } from "../../utils/myFonts";
import { Categories, Data } from "../data";
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";

export const Payment = ({ navigation, route }) => {

    const item = {}

    const method = [
        {
            name: 'Wallet',
            icon: require('../assets/wallet.png'),
            amount: 424.04,

        },
        {
            name: 'Google Pay',
            icon: require('../assets/googlePay.png'),

        },
        {
            name: 'Apple Pay',
            icon: require('../assets/apple.png'),

        },
        {
            name: 'Amazon Pay',
            icon: require('../assets/amazon.png'),

        },
    ]
    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: myColors.background, paddingHorizontal: myWidth(6) }}>
                <StatusbarH />
                <Spacer paddingT={myHeight(4)} />

                <View style={{ paddingHorizontal: myWidth(0) }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{

                        }} activeOpacity={0.6} onPress={() => navigation.goBack()}>

                            <Image style={{
                                height: myHeight(4.5), width: myHeight(4.5),
                                resizeMode: 'contain',
                            }} source={require('../assets/back.png')} />
                        </TouchableOpacity>

                        <Text numberOfLines={1}
                            style={[styles.textCommon, {
                                fontSize: myFontSize.xBody,
                                fontFamily: myFonts.bodyBold,
                                color: myColors.text
                            }]}>Payment</Text>
                        <View style={{
                            height: myHeight(4.5), width: myHeight(4.5),
                            borderRadius: myWidth(2.5), overflow: 'hidden'
                        }}>

                        </View>



                    </View>


                </View>
                <Spacer paddingT={myHeight(4)} />

                {/* Card */}

                <TouchableOpacity activeOpacity={0.8} style={{
                    paddingHorizontal: myWidth(3.5),
                    paddingVertical: myHeight(2),
                    borderWidth: myHeight(0.13),
                    borderColor: myColors.primaryT,
                    borderRadius: myWidth(6)
                }}>

                    <Text numberOfLines={1}
                        style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.heading,
                            color: myColors.text
                        }]}>Credit Card</Text>

                    <Spacer paddingT={myHeight(1.2)} />


                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[myColors.offColor2, myColors.offColor]}
                        style={{
                            paddingHorizontal: myWidth(3.5), paddingVertical: myHeight(1.5), borderRadius: myWidth(5),
                            // borderWidth: myHeight(0.1),
                            //  borderColor: myColors.primaryT,
                        }}>
                        <Spacer paddingT={myHeight(0.4)} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{

                            }} activeOpacity={0.6} onPress={() => null}>


                                <Image style={{
                                    height: myHeight(4), width: myHeight(4),
                                    resizeMode: 'contain',
                                }} source={require('../assets/cardChip.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{

                            }} activeOpacity={0.6} onPress={() => null}>


                                <Image style={{
                                    height: myHeight(4), width: myHeight(4) * 1.65,
                                    resizeMode: 'contain',
                                }} source={require('../assets/cardType.png')} />
                            </TouchableOpacity>
                        </View>

                        <Spacer paddingT={myHeight(3.5)} />

                        <Text numberOfLines={1}
                            style={[styles.textCommon, {
                                fontSize: RFValue(11),
                                fontFamily: myFonts.bodyBold,
                                color: myColors.text,
                                letterSpacing: RFValue(5.5),
                            }]}>3078 5245 5475 4524</Text>

                        <Spacer paddingT={myHeight(5)} />

                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'

                        }}>
                            <View style={{}}>
                                <Text numberOfLines={1}
                                    style={[styles.textCommon, {
                                        fontSize: myFontSize.tiny,
                                        fontFamily: myFonts.body,
                                        color: myColors.textL2
                                    }]}>Card Holder Name</Text>

                                <Spacer paddingT={myHeight(0.2)} />

                                <Text numberOfLines={1}
                                    style={[styles.textCommon, {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.bodyBold,
                                        color: myColors.text,

                                    }]}>Robert Evans</Text>
                            </View>
                            <View style={{}}>
                                <Text numberOfLines={1}
                                    style={[styles.textCommon, {
                                        fontSize: myFontSize.tiny,
                                        fontFamily: myFonts.body,
                                        color: myColors.textL2
                                    }]}>Expiry Date</Text>

                                <Spacer paddingT={myHeight(0.2)} />

                                <Text numberOfLines={1}
                                    style={[styles.textCommon, {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.bodyBold,
                                        color: myColors.text,

                                    }]}>02/30</Text>
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
                <Spacer paddingT={myHeight(1)} />

                {
                    method.map((it, index) => {
                        return (

                            <TouchableOpacity key={index} activeOpacity={0.8}
                                style={{ borderRadius: myWidth(500), borderWidth: myHeight(0.25), marginTop: myHeight(2.1), borderColor: myColors.offColor2, overflow: 'hidden' }}
                            >


                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[myColors.offColor2, myColors.offColor3]}
                                    style={{
                                        paddingHorizontal: myWidth(3.5), paddingVertical: myHeight(1),
                                        flexDirection: 'row', alignItems: 'center'
                                        // borderWidth: myHeight(0.1),
                                        //  borderColor: myColors.primaryT,
                                    }}>
                                    <View style={{ height: myHeight(5.5), width: myHeight(5.5), alignItems: 'center', justifyContent: 'center' }}>
                                        <Image style={{
                                            height: myHeight(3.6), width: myHeight(3.6),
                                            resizeMode: 'contain',
                                        }} source={it.icon} />
                                    </View>
                                    <Spacer paddingEnd={myWidth(3)} />
                                    <Text numberOfLines={1}
                                        style={[styles.textCommon, {
                                            fontSize: myFontSize.body,
                                            fontFamily: myFonts.heading,
                                            color: myColors.text,
                                            flex: 1

                                        }]}>{it.name}</Text>
                                    {
                                        it.amount &&
                                        <Text numberOfLines={1}
                                            style={[styles.textCommon, {
                                                fontSize: myFontSize.body,
                                                fontFamily: myFonts.body,
                                                color: myColors.text,
                                            }]}>$ {it.amount}</Text>
                                    }
                                </LinearGradient>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>


            {/* Bottom */}
            <View style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                backgroundColor: myColors.background, paddingHorizontal: myWidth(5), paddingBottom: myHeight(3), paddingTop: myHeight(2)
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
                        }}>$</Text> {4.20}</Text>
                </View>

                {/* Cat */}
                <TouchableOpacity activeOpacity={0.8} style={{
                    backgroundColor: myColors.primaryT,
                    borderRadius: myWidth(2), justifyContent: 'center', alignItems: 'center',
                    width: myWidth(60), paddingVertical: myHeight(2.1)
                }}>


                    <Text numberOfLines={1}
                        style={[styles.textCommon, {
                            fontSize: myFontSize.body4,
                            fontFamily: myFonts.bodyBold,
                            color: myColors.text
                        }]}>Pay From Credit Card</Text>
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