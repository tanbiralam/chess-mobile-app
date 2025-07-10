import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface WinningModalProps {
  visible: boolean;
  winner: "White" | "Black" | null;
  onRestart: () => void;
}

const { width } = Dimensions.get("window");

export default function WinningModal({
  visible,
  winner,
  onRestart,
}: WinningModalProps) {
  const router = useRouter();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.centeredView}>
        <LinearGradient
          colors={["#242320", "#3c3a36"]}
          style={styles.modalView}
        >
          <Text style={styles.title}>Game Over!</Text>
          <Text style={styles.winnerText}>{winner} Wins!</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.restartButton]}
              onPress={onRestart}
            >
              <Text style={styles.buttonText}>Play Again</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.homeButton]}
              onPress={() => router.push("/")}
            >
              <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: width * 0.8,
    backgroundColor: "#242320",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  winnerText: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    minWidth: 120,
    alignItems: "center",
  },
  restartButton: {
    backgroundColor: "#64854480",
    borderWidth: 2,
    borderColor: "#648544",
  },
  homeButton: {
    backgroundColor: "#4444ff80",
    borderWidth: 2,
    borderColor: "#4444ff",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
