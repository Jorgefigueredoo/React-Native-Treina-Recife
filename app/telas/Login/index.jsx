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
import logo from "../../../assets/images/logo_vertical_vermelho.png";

export default function Login() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#0057B8" />
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
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
              <Text style={styles.googleButtonText}>Entrar com Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookButton}>
              <FontAwesome5
                name="facebook-f"
                size={18}
                color="#FFFFFF"
                style={styles.facebookIcon}
              />
              <Text style={styles.facebookButtonText}>Entrar com Facebook</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Fazer login como{" "}
              <Text style={styles.footerTextBold}>Profissional</Text>
            </Text>
          </View>
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
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  backButton: {
    alignSelf: "flex-start",
    marginTop: -6,
    marginLeft: -2,
    padding: 4,
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
    backgroundColor: "#0057B8",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 18,
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
  },
  googleButtonText: {
    color: "#2C5A94",
    fontSize: 15,
    fontWeight: "500",
  },
  facebookButton: {
    height: 48,
    borderRadius: 10,
    backgroundColor: "#4A67AD",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
    position: "relative",
  },
  facebookIcon: {
    position: "absolute",
    left: 18,
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
});
