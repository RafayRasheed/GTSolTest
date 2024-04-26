import React, { useState } from 'react';
import { createNativeStackNavigator, } from "@react-navigation/native-stack";

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { bottomTab } from './common';
import { HomeScreen } from './home/home';




const HomeTAB = createNativeStackNavigator();
const hideBottom = ['RestaurantMoreDetails',
    'ItemDetails', 'ItemSearch', 'Search']

export const HomeNavigator = ({ navigation, route }) => {
    const [hideStatus, setHideState] = useState(false)
    React.useLayoutEffect(() => {
        // if (hideStatusScreens.includes(getFocusedRouteNameFromRoute(route))) {
        //     setHideState(true)
        // } else {
        //     setHideState(false)
        // }
        if (hideBottom.includes(getFocusedRouteNameFromRoute(route))) {
            navigation.setOptions({ tabBarStyle: { display: 'none' } })
        }
        else {
            navigation.setOptions({ tabBarStyle: bottomTab })

        }
    }, [navigation, route]);
    return (
        <>
            {/* <StatusBar backgroundColor={hideStatus ? 'transparent' : myColors.background} translucent={hideStatus ? true : false} /> */}

            <HomeTAB.Navigator
                screenOptions={{
                    animation: 'fade',
                    headerShown: false
                }}
                initialRouteName="HomeScreen"
            >
                <HomeTAB.Screen component={HomeScreen} name="HomeScreen" />



            </HomeTAB.Navigator>
        </>
    )
} 