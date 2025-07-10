import { Chess as ChessEngine } from "chess.js";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { initSounds, unloadSounds } from "../utils/sound";
import Board from "./Board";
import WinningModal from "./WinningModal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(36, 35, 32)",
  },
});

const Chess = () => {
  const [chess] = useState(() => new ChessEngine());
  const [gameState, setGameState] = useState({
    isGameOver: false,
    winner: null as "White" | "Black" | null,
  });

  // Initialize sounds when component mounts
  useEffect(() => {
    initSounds();
    return () => {
      unloadSounds();
    };
  }, []);

  const handleGameEnd = useCallback(() => {
    if (chess.isGameOver()) {
      let winner: "White" | "Black" | null = null;
      if (chess.isCheckmate()) {
        winner = chess.turn() === "w" ? "Black" : "White";
      }
      setGameState({ isGameOver: true, winner });
    }
  }, [chess]);

  const handleRestart = useCallback(() => {
    chess.reset();
    setGameState({ isGameOver: false, winner: null });
  }, [chess]);

  return (
    <View style={styles.container}>
      <Board chess={chess} onMove={handleGameEnd} />
      <WinningModal
        visible={gameState.isGameOver}
        winner={gameState.winner}
        onRestart={handleRestart}
      />
    </View>
  );
};

export default Chess;
