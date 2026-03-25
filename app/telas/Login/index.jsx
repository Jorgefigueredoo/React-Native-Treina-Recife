import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import googleLogo from "../../../assets/images/google.png"; // adicione a imagem do google nesse caminho
import { useNavigation, useRoute } from "@react-navigation/native";
import logoVermelho from "../../../assets/images/logo_vertical_vermelho.png";
import logoBranco from "../../../assets/images/logo_vertical_branco.png";

export default function Login() {
  const navigation = useNavigation();
  const route = useRoute();

  const perfil = route.params?.perfil || "paciente";
  const ehProfissional = perfil === "profissional";

  return (
    <SafeAreaView style={[styles.safeArea, ehProfissional && styles.safeAreaPro]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="chevron-back"
            size={28}
            color={ehProfissional ? "#fff" : "#0063c7"}
          />
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={ehProfissional ? logoBranco : logoVermelho}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="exemplo@123.com"
                placeholderTextColor="#B9BDC7"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite pelo menos 6 caracteres"
                placeholderTextColor="#B9BDC7"
                secureTextEntry
              />
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerLink}>
              <Text style={styles.registerLinkText}>Quero me cadastrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.googleButton}>
              <View style={styles.iconBox}>
                <Image source={googleLogo} style={styles.googleIcon} />
              </View>
              <Text style={styles.googleButtonText}>Entrar com Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookButton}>
              <View style={styles.iconBox}>
                <FontAwesome5
                  name="facebook-f"
                  size={18}
                  color="#FFFFFF"
                  style={styles.facebookIcon}
                />
              </View>
              <Text style={styles.facebookButtonText}>Entrar com Facebook</Text>
            </TouchableOpacity>
          </View>

          {
          !ehProfissional && (
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>
                Fazer login como{" "}
                <Text style={styles.footerTextBold}>Profissional</Text>
              </Text>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  safeAreaPro: {
    backgroundColor: "#003d7a",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
  },

  backButton: {
    position: "absolute",
    top: 1,
    left: 12,
    zIndex: 20,
    padding: 6,
  },

  content: {
    flex: 1,
    justifyContent: "flex-start",
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 8,
    marginBottom: 12,
  },

  logo: {
    width: 160,
    height: 160,
    resizeMode: "contain",
  },

  formContainer: {
    width: "100%",
  },

  inputGroup: {
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingVertical: 8,
    fontSize: 15,
    color: "#333",
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 22,
    marginTop: -4,
  },

  forgotPasswordText: {
    color: "#0057B8",
    fontSize: 14,
  },

  loginButton: {
    backgroundColor: "#0063c7",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    minHeight: 48,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  registerLink: {
    alignItems: "center",
    marginBottom: 26,
  },

  registerLinkText: {
    color: "#0057B8",
    fontSize: 15,
  },

  socialContainer: {
    width: "100%",
  },

  googleButton: {
    height: 48,
    borderRadius: 10,
    backgroundColor: "#EEF4FB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    position: "relative",
  },

  facebookButton: {
    height: 48,
    borderRadius: 10,
    backgroundColor: "#2d4373",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
    position: "relative",
    borderColor: "#fff",
    borderWidth: 1,
  },

  iconBox: {
    position: "absolute",
    left: 18,
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
  },

  googleIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  facebookIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },

  googleButtonText: {
    color: "#2C5A94",
    fontSize: 15,
    fontWeight: "500",
  },

  facebookButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "500",
  },

  footerContainer: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 16,
  },

  footerText: {
    color: "#333",
    fontSize: 14,
  },

  footerTextBold: {
    color: "#0057B8",
    fontWeight: "700",
  },

  textWhite: {
    color: "#FFF",
  },

  inputPro: {
    borderBottomColor: "#fff",
    color: "#fff",
  },

  loginButtonPro: {
    backgroundColor: "#fff",
  },

  loginButtonTextPro: {
    color: "#0063c7",
  },
});
