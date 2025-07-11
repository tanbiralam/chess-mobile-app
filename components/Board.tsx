import { Chess } from "chess.js";
import React, { useCallback, useState } from "react";
import { Dimensions, View } from "react-native";

import Background from "./Background";
import Piece from "./Piece";

const { width } = Dimensions.get("window");
const BOARD_SIZE = Math.min(width * 0.9, 400);

interface BoardProps {
  chess: Chess;
  onMove?: () => void;
  currentPlayer: "w" | "b";
}

const Board = ({ chess, onMove, currentPlayer }: BoardProps) => {
  const [board, setBoard] = useState(chess.board());

  const onTurn = useCallback(() => {
    setBoard(chess.board());
    onMove?.();
  }, [chess, onMove]);

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ width: BOARD_SIZE, height: BOARD_SIZE }}
    >
      <Background />
      {board.map((row, y) =>
        row.map((piece, x) => {
          if (piece !== null) {
            return (
              <Piece
                key={`${x}-${y}`}
                id={`${piece.color}${piece.type}` as const}
                startPosition={{ x, y }}
                chess={chess}
                onTurn={onTurn}
                enabled={currentPlayer === piece.color}
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
