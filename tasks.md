## ✅ **Prompt for Cursor AI**

---

**📝 Project Context:**
You are working on a **React Native** two-player offline chess game built with **TypeScript**.
The game uses:

- `chess.js` for chess rules & move validation.
- `Reanimated` for animations.
- Expo’s `Audio` API for sounds.
- Drag-and-drop for piece movement.
- `useState` for state management.

Currently, pawn promotion is handled by `chess.js` internally but **has no UI** for the player to choose which piece to promote to. The goal is to build a **simple, reusable Promotion Modal**.

---

## ✅ **What to build**

**Step 1 — `PromotionModal.tsx`**

- A reusable modal component that:

  - Shows when a pawn reaches the last rank.
  - Lists 4 promotion options: Queen, Rook, Bishop, Knight.
  - Uses clear icons/images for each piece.
  - Calls an `onSelect` callback with the chosen piece.

- Should use React Native’s `Modal` or `BottomSheet` (no third-party libraries needed unless already used).
- Should stay under **80–100 lines**.

**Step 2 — Add promotion trigger logic**

- In your main `Chess.tsx` or game logic:

  - After detecting a pawn move that reaches the last rank, **pause** the game.
  - Set a `promotionPending` state `{ from, to, color }`.
  - Show `<PromotionModal />` when `promotionPending` is truthy.

**Step 3 — Handle selection**

- When the user picks a piece:

  - Call `chess.js` with the `promotion` option (e.g., `{ promotion: 'q' }`).
  - Update the game state and resume play.
  - Dismiss the modal.

**Step 4 — Styling**

- Make the modal:

  - Centered or bottom slide.
  - Pieces are large buttons (TouchableOpacity).
  - Visually clear — max 1 screen.

**Step 5 — Test Cases**

- Test:

  - White pawn reaches rank 8.
  - Black pawn reaches rank 1.
  - Verify legal promotion.
  - Make sure no duplicate moves.
  - Ensure correct piece shows up.

---

## ✅ **Constraints**

- **Keep each file under 300 lines**.
- Use clear TypeScript props & types.
- No unnecessary libraries — only React Native, your existing stack, `chess.js`.
- Comment code for clarity.
- Keep logic clean and modular.

---

## ✅ **Deliverables**

- `PromotionModal.tsx` — promotion UI.
- Updated `Chess.tsx` or game logic to:

  - Trigger promotion.
  - Handle result.
  - Integrate with `chess.js`.

---

## ✅ **Additional Notes**

- If unsure, **ask before assuming pawn promotion is automatic** — it must be user-chosen.
- Follow chess rules: promotions only to **Queen, Rook, Bishop, Knight**.
- Use the same piece images as the board.
- Keep gesture logic untouched — only add promotion.

---

## ✅ **Goal**

The final feature must:

- Pause the game on promotion.
- Show a clean selection UI.
- Resume with the chosen piece.
- Work for both players.
- Be fully tested for edge cases.

---

**End of Prompt**
**Title:** `Add Pawn Promotion Feature`

---
