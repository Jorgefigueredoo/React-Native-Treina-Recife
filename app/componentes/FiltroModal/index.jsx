import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import RadioButton from "../RadioButton";
import Checkbox from "../Checkbox";

export default function FiltroModal({ visivel, aoFechar, aoBuscar }) {
  const [especialidade, setEspecialidade] = useState("Psicologia");
  const [tipoConsulta, setTipoConsulta] = useState("Online");
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("Maceió");
  const [pagamento, setPagamento] = useState("Particular");
  const [data, setData] = useState("14/04/2026");

  const [horarios, setHorarios] = useState({
    Manha: false,
    Tarde: false,
    Noite: false,
  });

  const toogleHorario = (periodo) => {
    setHorarios((prev) => ({
      ...prev,
      [periodo]: !prev[periodo],
    }));
  };

  const handleBuscar = () => {
    const filtros = {
      especialidade,
      tipoConsulta,
      nome,
      cidade,
      pagamento,
      data,
      horarios,
    };
    aoBuscar(filtros);
  };

  return (
    <Modal visible={visivel} transparent animationType="slide">
      <View style={estilos.overlay}>
        <View style={estilos.modalContent}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={estilos.header}>
              <Text style={estilos.title}> Escolha os filtros</Text>
              <TouchableOpacity onPress={aoFechar}>
                <Ionicons name="close" size={24} color={"#000"} />
              </TouchableOpacity>
            </View>

            <View>
              <Text style={estilos.label}>Especialidade</Text>
              <TouchableOpacity style={estilos.dropdown}>
                <Text style={estilos.dropdownText}>{especialidade}</Text>
                <Ionicons name="chevron-down" size={20} />
              </TouchableOpacity>
              <Text style={estilos.label}>Tipo de Consulta</Text>
              <View style={estilos.row}>
                <RadioButton
                  label={"Online"}
                  selected={tipoConsulta === "Online"}
                  onPress={() => setTipoConsulta("Online")}
                />
                <RadioButton
                  label={"Presencial"}
                  selected={tipoConsulta === "Presencial"}
                  onPress={() => setTipoConsulta("Presencial")}
                />
                <RadioButton
                  label={"Ambos"}
                  selected={tipoConsulta === "Ambos"}
                  onPress={() => setTipoConsulta("Ambos")}
                />

              </View>
            
            </View>

            <Text style={estilos.label}>Nome(Opcional)</Text>
            <TouchableOpacity>
                <TextInput
                  style={estilos.input}
                  placeholder="Digite o nome"
                  placeholderTextColor={"#A0A0A0"}
                  onChangeText={setNome}
                  color={"#999"}
                />
            </TouchableOpacity>

            <Text style={estilos.label}>Cidade</Text>
            <TouchableOpacity style={estilos.dropdown}>
                <Text style={estilos.dropdownText}>{cidade}</Text>
                <Ionicons name="chevron-down" size={20} />
            </TouchableOpacity>

            <Text style={estilos.label}>Forma de Pagamento</Text>
            <TouchableOpacity style={estilos.dropdown}>
                <Text style={estilos.dropdownText}>{pagamento}</Text>
                <Ionicons name="chevron-down" size={20} />
            </TouchableOpacity>

            <Text style={estilos.label}>A partir de</Text>
            <TextInput
              style={[estilos.input, {width: "50%"}]}
              value={data}
              onChangeText={setData}
            />

            <Text style={estilos.label}>Horários da Consulta</Text>
            <View style={estilos.row}>
              <Checkbox
                label="Manhã"
                checked={horarios.Manha}
                onPress={() => toogleHorario("Manha")}
              />
              <Checkbox
                label="Tarde"
                checked={horarios.Tarde}
                onPress={() => toogleHorario("Tarde")}
              />
              <Checkbox
                label="Noite"
                checked={horarios.Noite}
                onPress={() => toogleHorario("Noite")}
              />
            </View>

          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const estilos = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    maxHeight: "85%",
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: { fontSize: 18, fontWeight: "bold", color: "#000" },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    marginTop: 15,
    marginBottom: 8,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    paddingVertical: 8,
    marginBottom: 10,
  },
  dropdownText: { fontSize: 15, color: "#007BFF" },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    paddingVertical: 8,
    fontSize: 15,
    color: "#999",
    fontStyle: "italic",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  checkboxContainer: { flexDirection: "row", alignItems: "center" },
  checkboxLabel: {
    marginLeft: 5,
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  searchButton: {
    backgroundColor: "#0056b3",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  searchButtonText: { color: "#FFF", fontSize: 16, fontWeight: "500" },
});