import SelecaoPerfil from "./app/telas/SelecaoPerfil/index.jsx";
import Login from "./app/telas/Login/index.jsx";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StackScreen } from "react-native-screens";
import HomePaciente from "./app/telas/HomePaciente/index.jsx";

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
        <Stack.Screen name = "HomePaciente" component={HomePaciente}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

