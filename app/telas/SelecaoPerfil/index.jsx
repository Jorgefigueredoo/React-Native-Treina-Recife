import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../../assets/images/logo_vertical_vermelho.png";

export default function SelecaoPerfil() {
  return (
    <SafeAreaView style={estilos.SafeArea}>
      <View style={estilos.container}>
        <View style={estilos.logoContainer}>
          <Image source={logo} style={estilos.logo} />
        </View>

        <View style={estilos.botoesContainer}>
          <TouchableOpacity style={estilos.botaoPrimario}>
            <Text style={estilos.textoBotaoPrimario}>
              Sou Profissional de Saúde
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.botaoSecundario}>
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
    backgroundColor: "whitesmoke",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
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
    backgroundColor: "#0063C7",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },

  textoBotaoPrimario: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  botaoSecundario: {
    width: 325,
    height: 50,
    backgroundColor: "#FFF",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    borderColor: "#0063C7",
    borderWidth: 1,
    alignItems: "center",
  },
  textoBotaoSecundario: {
    fontSize: 15,
    backgroundColor: "#FFFFFF",
    color: "#0063C7",
    textAlign: "center",
  },
});
