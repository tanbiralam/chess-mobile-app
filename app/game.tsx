import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Chess from "../components/Chess";

export default function GameScreen() {
  const router = useRouter();
  const [currentPlayer, setCurrentPlayer] = useState<"White" | "Black">(
    "White"
  );

  console.log("Rendering GameScreen");

  return (
    <View style={styles.container}>
      <View style={styles.gameWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.turnText}>{currentPlayer}&apos;s Turn</Text>
        </View>

        <View style={styles.chessContainer}>
          <Chess />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.resignButton}
            onPress={() => {
              router.push("/");
            }}
          >
            <Text style={styles.resignText}>Resign</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242320",
    position: "relative",
  },
  gameWrapper: {
    flex: 1,
    position: "relative",
    zIndex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
    zIndex: 2,
  },
  chessContainer: {
    flex: 1,
    position: "relative",
    zIndex: 1,
  },
  backButton: {
    marginRight: 20,
  },
  turnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    padding: 20,
    alignItems: "center",
    zIndex: 2,
  },
  resignButton: {
    backgroundColor: "#ff444480",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ff4444",
  },
  resignText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
