import { NavigationContainer } from "@react-navigation/native"

import { HomeBottomNavigator } from "./home_bottom_navigator"

import { createStackNavigator } from "@react-navigation/stack"
import { ItemDetail } from "./home/Item_detail"
import { Payment } from "./cart/payment"




const AppTAB = createStackNavigator()

export const AppNavigator = () => {


    return (
        <NavigationContainer >
            <AppTAB.Navigator
                initialRouteName="HomeBottomNavigator"
                screenOptions={{
                    animation: 'Slide',
                    headerShown: false
                }}
            >

                <AppTAB.Screen component={HomeBottomNavigator} name="HomeBottomNavigator" />
                <AppTAB.Screen component={ItemDetail} name="ItemDetail" />
                <AppTAB.Screen component={Payment} name="Payment" />



            </AppTAB.Navigator>
        </NavigationContainer>
    )
}