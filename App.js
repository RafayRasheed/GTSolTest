import { useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { AppNavigator } from "./components/app_navigator";

export default function App() {

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />

      <AppNavigator />


    </>
  );
}
