import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function NotaEstrela({ nota }) {
  const estrelas = [];

  for (let i = 1; i <= 5; i++) {
    if (nota >= i) {
      estrelas.push(
        <FontAwesome
          key={i}
          name="star"
          size={16}
          color="#FFD700"
          style={estilos.estrela}
        />,
      );
    } else if (nota >= i - 0.5) {
      estrelas.push(
        <FontAwesome
          key={i}
          name="star-half-empty"
          size={16}
          color="#FFD700"
          style={estilos.estrela}
        />,
      );
    } else {
      estrelas.push(
        <FontAwesome
          key={i}
          name="star-o"
          size={16}
          color="#FFD700"
          style={estilos.estrela}
        />,
      );
    }
  }

  return <View style={estilos.container}>{estrelas}</View>;
}

const estilos = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  estrela: { marginRight: 2 },
});
