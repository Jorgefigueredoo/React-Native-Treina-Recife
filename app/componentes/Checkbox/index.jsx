import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Checkbox({ label, checked, onPress }) {
  return (
    <TouchableOpacity style={estilos.checkboxContainer} onPress={onPress}>
      <Ionicons
        name={checked ? "checkmark-circle" : "ellipse-outline"}
        size={20}
        color={checked ? "#007BFF" : "#999"}
      />
      <Text style={estilos.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  checkboxContainer: { flexDirection: "row", alignItems: "center" },
  checkboxLabel: {
    marginLeft: 5,
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
});
