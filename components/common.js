import React, { useEffect } from 'react';
import { Dimensions, View, Platform, StatusBar, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { myColors } from '../utils/myColors';
const { height, width } = Dimensions.get('window')
export const ios = Platform.OS == 'ios'
export const stutusH = StatusBar.currentHeight


export function printWithPlat(print) {
    console.log(`${Platform.OS} => ${print} ${height} ${StatusBar.currentHeight}`)
}
export function myHeight(per) {
    if (ios) {

        return (per * height) / 100
    }
    if (stutusH) {
        return (per * (height - stutusH)) / 100
    }
    return (per * (height)) / 100

}
export function myWidth(per) {
    const myHeight = (per * width) / 100
    return myHeight
}

export const Spacer = ({ paddingEnd = 0, paddingT = 0 }) => (
    <View style={{ paddingEnd: paddingEnd, paddingTop: paddingT }} />
)


export const bottomTab = {
    backgroundColor: myColors.background,
    paddingHorizontal: myWidth(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    height: myHeight(7.5),
    paddingBottom: myHeight(2),
    paddingTop: myHeight(2),
    borderColor: myColors.background,
    borderTopWidth: 0,
}

export const StatusBarShow = () => (
    <StatusBar backgroundColor={myColors.background} translucent={false} />
)
export const StatusBarBlack = () => (
    <StatusBar backgroundColor={myColors.text} translucent={false} />
)
export const StatusBarHide = () => (
    <StatusBar backgroundColor={'transparent'} translucent={true} />
)

export const StatusbarH = () => (
    <View style={{ height: StatusBar.currentHeight }} />
)


