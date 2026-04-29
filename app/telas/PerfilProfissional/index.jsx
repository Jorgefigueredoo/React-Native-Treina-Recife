import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { buscarProfissional } from "../../servicos/profissionais";
import NotaEstrela from "../../componentes/NotaEstrela";

export default function PerfilProfissional() {
  const navigation = useNavigation();
  const route = useRoute();

  const { idProfissional } = route.params;

  const [profissional, setProfissional] = useState({});

  useEffect(() => {
    buscarProfissional(idProfissional, setProfissional);
  }, [idProfissional]);

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.header}>
        <TouchableOpacity
          style={estilos.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={estilos.headerTitle}>Perfil do Profissional</Text>
        <View style={{ width: 28 }}></View>
      </View>

      <ScrollView
        contentContainerStyle={estilos.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={estilos.profileSection}>
          <View style={estilos.profileRow}>
            <Image
              style={estilos.avatarImage}
              source={{ uri: profissional.avatar }}
            />
            <View style={estilos.profileInfo}>
              <Text style={estilos.profissionalNome}>{profissional.nome}</Text>
              <Text style={estilos.profissionalEspecialidade}>
                {profissional.especialidade}
                <Text style={estilos.linkMais}> Mais</Text>
              </Text>
              <View style={estilos.detailsContainer}>
                <Text style={estilos.detailText}>
                  <Text style={estilos.detailLabel}>Consulta:</Text>{" "}
                  {profissional.consulta}
                </Text>
                <Text style={estilos.detailText}>
                  <Text style={estilos.detailLabel}>Atendimento</Text>{" "}
                  {profissional.modalidade}
                </Text>
              </View>
            </View>
          </View>
          <View style={estilos.ratingRow}>
            <NotaEstrela nota={profissional.avaliacao} />
          </View>
        </View>
        <View style={estilos.socialSection}>
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome name="facebook" size={32} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome name="instagram" size={32} color="#e1306c" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome name="linkedin" size={32} color="#0077B5" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome name="youtube" size={32} color="#ff0000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  backButton: {
    padding: 5,
    marginLeft: -5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  scrollContent: {
    paddingBottom: 30,
  },

  // Perfil Principal
  profileSection: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  profileRow: {
    flexDirection: "row",
    marginBottom: 15,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 16,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
    justifyContent: "center",
  },
  profissionalNome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0056b3",
    marginBottom: 4,
  },
  profissionalEspecialidade: {
    fontSize: 13,
    color: "#333",
    lineHeight: 18,
    marginBottom: 8,
  },
  linkMais: {
    color: "#0056b3",
    fontWeight: "500",
  },
  detailsContainer: {
    marginTop: 2,
  },
  detailText: {
    fontSize: 12,
    color: "#555",
    marginBottom: 2,
  },
  detailLabel: {
    fontWeight: "bold",
    color: "#333",
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingScore: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  reviewsText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },

  // Redes Sociais
  socialSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    marginHorizontal: 20,
  },

  // Agenda
  agendaSection: {
    paddingTop: 20,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  agendaListContent: {
    paddingHorizontal: 20,
  },
  agendaCard: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    minWidth: 180,
  },
  agendaData: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
    textAlign: "center",
  },
  horariosRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    flexWrap: "wrap",
  },
  horarioPill: {
    borderWidth: 1,
    borderColor: "#0056b3",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  horarioText: {
    color: "#0056b3",
    fontSize: 13,
    fontWeight: "500",
  },
  paginationDots: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#CCC",
    marginRight: 5,
  },
  dotActive: {
    width: 16,
    backgroundColor: "#0056b3",
  },
  fullAgendaButton: {
    backgroundColor: "#0056b3",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 20,
  },
  fullAgendaButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },

  // Endereço
  addressSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  addressText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
    marginBottom: 5,
  },
  contactText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
    marginBottom: 15,
  },
  mapImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginTop: 5,
  },
});
