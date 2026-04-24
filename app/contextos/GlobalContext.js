import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
  const [usuario, setUsuario] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [fontes] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  const navigation = useNavigation();

  useEffect(() => {
    async function carregarDadosUsuario() {
      const usuarioLogado = await AsyncStorage.getItem("@procardio_user");
      if (usuarioLogado) {
        setUsuario(JSON.parse(usuarioLogado));
      }
      setCarregando(false);
    }
    carregarDadosUsuario();
  }, []);

  if (!fontes) {
    return null;
  }

  async function signOut() {
    try {
      await AsyncStorage.removeItem("@procardio_user");

      navigation.navigate("SelecaoPerfil");
    } catch (erro) {
      console.error("Erro ao remover dados do usuário: " + erro);
    } finally {
      setUsuario(null);
    }
  }

  return (
    <GlobalContext.Provider value={{ fontes, usuario, carregando, signOut }}>
      {children}
    </GlobalContext.Provider>
  );
}
