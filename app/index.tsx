import { StyleSheet, View } from "react-native";
import Chess from "../components/Chess";

export default function App() {
  return (
    <View style={styles.container}>
      <Chess />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242320", // Using the same background color as in Chess component
    alignItems: "center",
    justifyContent: "center",
  },
});
