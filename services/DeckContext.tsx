import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Asset } from "expo-asset";

type DeckContextType = {
  cardBack: string;
  setCardBack: (newCardBack: string) => void;
};

const DeckContext = createContext<DeckContextType | undefined>(undefined);

export const useDeck = () => {
  const context = useContext(DeckContext);
  if (!context) {
    throw new Error("useDeck must be used within a DeckProvider");
  }
  return context;
};

export const DeckProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const defaultCardBack =
    Platform.OS === "web"
      ? "/assets/images/back-card.png"
      : Asset.fromModule(require("../assets/images/back-card.png")).uri;

  const [cardBack, setCardBack] = useState<string>(defaultCardBack);

  // Function to persist cardBack in AsyncStorage
  const saveCardBackToStorage = async (newCardBack: string) => {
    try {
      await AsyncStorage.setItem("cardBack", newCardBack);
    } catch (error) {
      console.error("Error saving cardBack to AsyncStorage:", error);
    }
  };

  // Load the cardBack from AsyncStorage when the app starts
  useEffect(() => {
    const loadCardBackFromStorage = async () => {
      try {
        const storedCardBack = await AsyncStorage.getItem("cardBack");
        if (storedCardBack) {
          setCardBack(storedCardBack);
        } else {
          console.warn("No cardBack found in AsyncStorage, using default.");
        }
      } catch (error) {
        console.error("Error loading cardBack from AsyncStorage:", error);
      }
    };

    loadCardBackFromStorage();
  }, []);

  // Function to set the cardBack and persist it in AsyncStorage, memoized with useCallback
  const updateCardBack = useCallback((newCardBack: string) => {
    setCardBack(newCardBack);
    saveCardBackToStorage(newCardBack); // Save the new cardBack to storage
  }, []);

  // Memoize the value to prevent unnecessary re-renders
  const value = React.useMemo(
    () => ({ cardBack, setCardBack: updateCardBack }),
    [cardBack, updateCardBack]
  );

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>;
};
