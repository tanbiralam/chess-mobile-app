import { Audio } from "expo-av";

let moveSound: Audio.Sound | null = null;
let captureSound: Audio.Sound | null = null;

// Initialize sounds
export const initSounds = async () => {
  try {
    const { sound: moveSnd } = await Audio.Sound.createAsync(
      require("../assets/sounds/move-self.mp3"),
      { shouldPlay: false }
    );
    const { sound: captureSnd } = await Audio.Sound.createAsync(
      require("../assets/sounds/capture.mp3"),
      { shouldPlay: false }
    );

    moveSound = moveSnd;
    captureSound = captureSnd;

    // Configure audio mode
    await Audio.setAudioModeAsync({
      playsInSilentMode: true,
      staysActiveInBackground: false,
      shouldDuckAndroid: true,
    });
  } catch (error) {
    console.error("Error loading sounds:", error);
  }
};

// Play move sound
export const playMoveSound = async () => {
  try {
    if (moveSound) {
      // Reset to start and play
      await moveSound.stopAsync();
      await moveSound.setPositionAsync(0);
      await moveSound.playAsync();
    }
  } catch (error) {
    console.error("Error playing move sound:", error);
  }
};

// Play capture sound
export const playCaptureSound = async () => {
  try {
    if (captureSound) {
      // Reset to start and play
      await captureSound.stopAsync();
      await captureSound.setPositionAsync(0);
      await captureSound.playAsync();
    }
  } catch (error) {
    console.error("Error playing capture sound:", error);
  }
};

// Cleanup sounds
export const unloadSounds = async () => {
  try {
    if (moveSound) {
      await moveSound.unloadAsync();
    }
    if (captureSound) {
      await captureSound.unloadAsync();
    }
  } catch (error) {
    console.error("Error unloading sounds:", error);
  }
};
