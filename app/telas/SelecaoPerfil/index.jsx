import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../../assets/images/logo_vertical_vermelho.png";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { tema } from "../../tema";
import { GlobalContext } from "../../contextos/GlobalContext";

export default function SelecaoPerfil() {
  const navigation = useNavigation();
  const {fontes} = useContext(GlobalContext);

  return (
    <SafeAreaView style={estilos.SafeArea}>
      <View style={estilos.container}>
        <View style={estilos.logoContainer}>
          <Image source={logo} style={estilos.logo} />
        </View>

        <View style={estilos.botoesContainer}>
          <TouchableOpacity
            style={estilos.botaoPrimario}
            onPress={() =>
              navigation.navigate("Login", { perfil: "profissional" })
            }
          >
            <Text style={estilos.textoBotaoPrimario}>
              Sou Profissional de Saúde
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilos.botaoSecundario}
            onPress={() =>
              navigation.navigate("Login", { perfil: "paciente" })
            }
          >
            <Text style={estilos.textoBotaoSecundario}>Sou Paciente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: tema.colors.background,
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: tema.spacing.large,
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 254,
    height: 254,
  },
  botoesContainer: {
    marginBottom: 65,
  },
  botaoPrimario: {
    width: 325,
    height: 50,
    backgroundColor: tema.colors.primary,
    paddingVertical: tema.spacing.medium,
    paddingHorizontal: tema.spacing.xlarge,
    borderRadius: tema.borderRadius.medium,
    alignItems: "center",
    marginBottom: tema.spacing.medium,
  },

  textoBotaoPrimario: {
    color: tema.colors.text,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto_400Regular"
  },

  botaoSecundario: {
    width: 325,
    height: 50,
    backgroundColor: tema.colors.white,
    paddingVertical: tema.spacing.medium,
    paddingHorizontal: tema.spacing.xlarge,
    borderRadius: tema.borderRadius.medium,
    borderColor: tema.colors.primary,
    borderWidth: 1,
    alignItems: "center",
  },
  textoBotaoSecundario: {
    fontSize: 15,
    fontFamily: "Roboto_400Regular",
    color: tema.colors.primary,
    
  },
});