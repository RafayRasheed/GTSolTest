

import { FlatList, Image, SafeAreaView, ScrollView, SectionList, StatusBar, StyleSheet, Text, View } from "react-native";
import { Spacer, StatusbarH, myHeight, myWidth } from "../common";
import { myColors } from "../../utils/myColors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { myFontSize, myFonts, myLetSpacing } from "../../utils/myFonts";
import { Categories, Data } from "../data";
import { useState } from "react";

export const Favourites = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>
            <StatusbarH />

        </SafeAreaView>
    )
}

