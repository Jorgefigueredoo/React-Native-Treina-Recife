import SelecaoPerfil from "./app/telas/SelecaoPerfil/index.jsx";
import Login from "./app/telas/Login/index.jsx";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SelecaoPerfil"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SelecaoPerfil" component={SelecaoPerfil} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

