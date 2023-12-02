import React from "react";
import Home from "./src/components/screens/home"
import { Provider } from 'react-redux'
import { store } from "./src/store/store";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wallet from "./src/components/screens/wallet";
import Payment from "./src/components/screens/payment";
import PaymentSuccess from "./src/components/screens/payment/paymentSuccess";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Wallet" component={Wallet} />
        <Stack.Screen options={{headerShown:false}} name="Payment" component={Payment} />
        <Stack.Screen options={{headerShown:false}} name="PaymentSuccess" component={PaymentSuccess} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>);

}

export default App;