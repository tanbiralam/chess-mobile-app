import { Chess } from "chess.js";
import React, { useCallback, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import Background from "./Background";
import Piece from "./Piece";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
  },
});

interface BoardProps {
  chess: Chess;
  onMove?: () => void;
}

const Board = ({ chess, onMove }: BoardProps) => {
  const [state, setState] = useState({
    player: "w",
    board: chess.board(),
  });

  const onTurn = useCallback(() => {
    setState({
      player: state.player === "w" ? "b" : "w",
      board: chess.board(),
    });
    onMove?.();
  }, [chess, state.player, onMove]);

  return (
    <View style={styles.container}>
      <Background />
      {state.board.map((row, y) =>
        row.map((piece, x) => {
          if (piece !== null) {
            return (
              <Piece
                key={`${x}-${y}`}
                id={`${piece.color}${piece.type}` as const}
                startPosition={{ x, y }}
                chess={chess}
                onTurn={onTurn}
                enabled={state.player === piece.color}
              />
            );
          }
          return null;
        })
      )}
    </View>
  );
};

export default Board;
