import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePaciente from "./app/telas/HomePaciente/index.jsx";
import Login from "./app/telas/Login/index.jsx";
import SelecaoPerfil from "./app/telas/SelecaoPerfil/index.jsx";
import MenuLateral from "./app/componentes/MenuLateral/index.jsx";
import ResultadosBusca from "./app/telas/ResultadosBusca/index.jsx";
import PerfilProfissional from "./app/telas/PerfilProfissional/index.jsx";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomePaciente") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Mensagens") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          } else if (route.name === "Consultas") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Favoritos") {
            iconName = focused ? "heart" : "heart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0063c7",
        tabInactiveTintColor: "#666",
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomePaciente" component={HomePaciente} options={{ tabBarLabel: "Home" }} />
      <Tab.Screen name="Mensagens" component={ResultadosBusca} />
      <Tab.Screen name="Consultas" component={HomePaciente} />
      <Tab.Screen name="Favoritos" component={HomePaciente} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuLateral {...props} />}
      screenOptions={{ 
        headerShown: false, 
        drawerStyle: { width: "80%" },
        headerTintColor: "#0063c7",
        drawerType: 'front', 
      }}
    >
      <Drawer.Screen 
        name="Tabs" 
        component={TabNavigator} 
        options={{ title: "Página Inicial" }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SelecaoPerfil"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SelecaoPerfil" component={SelecaoPerfil} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="ResultadosBusca" component={ResultadosBusca} />
         <Stack.Screen name="PerfilProfissional" component={PerfilProfissional} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
