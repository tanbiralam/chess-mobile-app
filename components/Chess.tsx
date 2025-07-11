import { Chess as ChessEngine } from "chess.js";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { initSounds, unloadSounds } from "../utils/sound";
import Board from "./Board";
import WinningModal from "./WinningModal";

const Chess = () => {
  const [chess] = useState(() => new ChessEngine());
  const [gameState, setGameState] = useState({
    isGameOver: false,
    winner: null as "White" | "Black" | null,
    currentPlayer: "w" as "w" | "b",
    moveIndex: 0,
  });

  useEffect(() => {
    console.log("Chess component mounted");
    initSounds();
    return () => {
      unloadSounds();
    };
  }, []);

  const checkGameStatus = useCallback(() => {
    const isGameOver = chess.isGameOver();
    let winner: "White" | "Black" | null = null;

    if (isGameOver) {
      if (chess.isCheckmate()) {
        winner = chess.turn() === "w" ? "Black" : "White";
        console.log("🏆 CHECKMATE! Winner:", winner);
      }
    }

    setGameState((prev) => ({
      ...prev,
      isGameOver,
      winner,
      currentPlayer: chess.turn(),
    }));
  }, [chess]);

  return (
    <SafeAreaView className="flex-1 bg-[#242320]">
      <View className="flex-1 items-center justify-center">
        <Board
          chess={chess}
          onMove={checkGameStatus}
          currentPlayer={gameState.currentPlayer}
        />
        {gameState.isGameOver && (
          <WinningModal
            onRestart={() => {
              chess.reset();
              setGameState({
                isGameOver: false,
                winner: null,
                currentPlayer: "w",
                moveIndex: 0,
              });
            }}
            visible={gameState.isGameOver}
            winner={gameState.winner}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Chess;
