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
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#0057B8" />
        </TouchableOpacity>

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
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
              }}
              style={styles.googleIcon}
            />
            <Text style={styles.googleButtonText}>Entrar com Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookButton}>
            <FontAwesome5 name="facebook-f" size={18} color="#FFFFFF" style={styles.facebookIcon} />
            <Text style={styles.facebookButtonText}>Entrar com Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Fazer login como <Text style={styles.footerTextBold}>Profissional</Text>
          </Text>
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
    paddingHorizontal: 28,
    paddingTop: 8,
  },
  backButton: {
    alignSelf: "flex-start",
    marginTop: 4,
    marginBottom: 8,
    padding: 4,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 8,
    marginBottom: 22,
  },
  logo: {
    width: 170,
    height: 170,
  },
  formContainer: {
    width: "100%",
    marginBottom: 28,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: "#1F2937",
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingVertical: 10,
    fontSize: 16,
    color: "#111827",
    fontStyle: "italic",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: -4,
    marginBottom: 26,
  },
  forgotPasswordText: {
    color: "#0057B8",
    fontSize: 14,
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: "#0057B8",
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "500",
  },
  registerLink: {
    alignItems: "center",
    marginBottom: 18,
  },
  registerLinkText: {
    color: "#0057B8",
    fontSize: 16,
    fontWeight: "500",
  },
  socialContainer: {
    width: "100%",
    marginTop: 4,
  },
  googleButton: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#EDF3FB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    position: "relative",
  },
  googleIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 18,
  },
  googleButtonText: {
    color: "#2C5A94",
    fontSize: 16,
    fontWeight: "500",
  },
  facebookButton: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#4967AA",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 34,
    position: "relative",
  },
  facebookIcon: {
    position: "absolute",
    left: 20,
  },
  facebookButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  footerContainer: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 18,
  },
  footerText: {
    fontSize: 15,
    color: "#333333",
  },
  footerTextBold: {
    color: "#0057B8",
    fontWeight: "700",
  },
});