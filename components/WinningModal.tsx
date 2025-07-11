import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  Dimensions,
  Modal,
  Platform,
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

const { width, height } = Dimensions.get("window");

export default function WinningModal({
  visible,
  winner,
  onRestart,
}: WinningModalProps) {
  const router = useRouter();

  useEffect(() => {
    console.log("WinningModal visibility changed:", visible);
    console.log("Winner:", winner);
  }, [visible, winner]);

  const handleRestart = () => {
    console.log("Restarting game from modal");
    onRestart();
  };

  if (!visible) return null;

  return (
    <View style={StyleSheet.absoluteFill}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {}}
        statusBarTranslucent={true}
      >
        <View style={styles.modalRoot}>
          <View style={styles.overlay} />
          <View style={styles.centeredView}>
            <LinearGradient
              colors={["#1a1a1a", "#2d2d2d"]}
              style={styles.modalView}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.contentContainer}>
                <Text style={styles.title}>Game Over!</Text>
                <Text style={styles.winnerText}>
                  {winner ? `${winner} Wins!` : "It's a Draw!"}
                </Text>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.restartButton]}
                    onPress={handleRestart}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.buttonText}>Play Again</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.button, styles.homeButton]}
                    onPress={() => router.push("/")}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.buttonText}>Home</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalRoot: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 999,
    zIndex: 999999,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: width * 0.9,
    maxWidth: 400,
    minHeight: height * 0.3,
    backgroundColor: "#1a1a1a",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#444444",
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.75,
        shadowRadius: 12,
      },
      android: {
        elevation: 25,
      },
    }),
  },
  contentContainer: {
    padding: 32,
    alignItems: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 24,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
  },
  winnerText: {
    fontSize: 32,
    color: "#ffffff",
    marginBottom: 40,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 16,
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 30,
    minWidth: 150,
    alignItems: "center",
    marginHorizontal: 8,
    borderWidth: 2,
  },
  restartButton: {
    backgroundColor: "#2ecc71",
    borderColor: "#27ae60",
    shadowColor: "#2ecc71",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  homeButton: {
    backgroundColor: "#3498db",
    borderColor: "#2980b9",
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
