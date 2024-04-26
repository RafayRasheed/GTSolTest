import React, { useLayoutEffect } from "react";
import { Text, SafeAreaView, View, Image, StatusBar, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Spacer, StatusbarH, bottomTab, ios, myHeight, myWidth, storage } from "./common";
import { myColors } from "../utils/myColors";
import { myFontSize, myFonts, myLetSpacing } from "../utils/myFonts";
import { HomeNavigator } from "./home_navigator";


import { RFValue } from "react-native-responsive-fontsize";
import { Cart } from "./cart/cart";
import { History } from "./history/history";
import { Favourites } from "./favourites/favourites";

const Tab = createBottomTabNavigator()

const Icons = {
    HOME: {
        image: require('./assets/bottom/home.png'),
        style: { width: myHeight(3.2), height: myHeight(3.2), }
    },
    BAG: {

        image: require('./assets/bottom/bag.png'),
        style: { width: myHeight(3.3), height: myHeight(3.3) }
    },

    // WALLET: require('../assets/home_main/navigator/wallet.png'),
    FAV: {
        image: require('./assets/bottom/heart.png'),
        style: { width: myHeight(3.3), height: myHeight(3.3) }
    },
    NOTI: {
        image: require('./assets/bottom/bell.png'),
        style: { width: myHeight(3.1), height: myHeight(3.1) }
    },
}


const screenOptions = ({ navigator, route }) => {
    const name = route.name

    // console.log(unread)
    return {
        headerShown: false,
        tabBarStyle: bottomTab,
        // tabBarLabelStyle: {
        //     display: 'flex',
        //     fontSize: myFontSize.xSmall,
        //     fontFamily: myFonts.bodyBold,
        //     letterSpacing: myLetSpacing.common,
        //     paddingTop: myHeight(1),
        // },
        tabBarActiveTintColor: myColors.primaryT,
        tabBarInactiveTintColor: myColors.textL2,
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => {
            return (
                <Image style={[Icons[name].style, { tintColor: color, resizeMode: 'contain', }]}
                    source={Icons[name].image} />
            )
            if (name == 'HOT') {
                return (
                    <View style={{
                        padding: myHeight(2), backgroundColor: color == myColors.primaryT ? myColors.primaryL3 : myColors.primaryL5, borderWidth: myHeight(0.1), borderColor: myColors.offColor7,
                        borderRadius: myHeight(10), elevation: 3,
                        marginTop: -myHeight(7.5)
                    }}>
                        <Image style={[Icons[name].style, { resizeMode: 'contain', }]}
                            source={Icons[name].image} />
                    </View>
                )
            }
            if (name == 'CHATS') {
                return (
                    <View>
                        <Image style={[Icons[name].style, { tintColor: color, resizeMode: 'contain', }]}
                            source={Icons[name].image} />
                        {
                            totalUnread ?
                                <View style={{
                                    position: 'absolute', top: -myHeight(0.6), right: -myHeight(2), backgroundColor: myColors.red, borderRadius: 100,
                                    // paddingVertical: myHeight(0.35), paddingHorizontal: myHeight(1)
                                    minWidth: RFValue(18),
                                    minHeight: RFValue(18), justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Text style={[styles.textCommon, {
                                        fontSize: myFontSize.tiny, fontFamily: myFonts.bodyBold,
                                        color: myColors.background
                                    }]}>{totalUnread > 9 ? "9+" : totalUnread}</Text>
                                </View>
                                : null
                        }
                    </View>
                )
            }
            if (name == 'RIDES') {
                return (
                    <View>
                        <Image style={[Icons[name].style, { tintColor: color, resizeMode: 'contain', }]}
                            source={Icons[name].image} />
                        {
                            unread?.length ?
                                <View style={{
                                    position: 'absolute', top: -myHeight(0.6), right: -myHeight(1.4), backgroundColor: myColors.red, borderRadius: 100,
                                    paddingVertical: myHeight(0.35), paddingHorizontal: myHeight(1)
                                }}>
                                    <Text style={[styles.textCommon, { fontSize: myFontSize.tiny, fontFamily: myFonts.bodyBold, color: myColors.background }]}>{unread.length}</Text>
                                </View>
                                : null
                        }
                    </View>
                )
            }
            return (
                <Image style={[Icons[name].style, { tintColor: color, resizeMode: 'contain', }]}
                    source={Icons[name].image} />
            )
        },
    }
}



export const HomeBottomNavigator = ({ route, navigation }) => {

    return (

        <>
            <Tab.Navigator
                tabBarActiveTintColor={myColors.primary}
                headerShown={false}
                screenOptions={screenOptions}
                tabBarShowLabel={false}
                initialRouteName="HOME"
            >
                <Tab.Screen name="HOME" component={HomeNavigator} />
                <Tab.Screen name="BAG" component={Cart} />
                <Tab.Screen name="FAV" component={Favourites} />
                <Tab.Screen name="NOTI" component={History} />

            </Tab.Navigator>
        </>


    )
}

const styles = StyleSheet.create({
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    }
})
