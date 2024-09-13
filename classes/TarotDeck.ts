import { Asset } from "expo-asset";
import { Platform } from "react-native";

export const tarotDeck = [
  {
    name: "The Fool",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-fool.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-fool.jpg")).uri, // Native handling
    description: "New beginnings, optimism, trust in life",
  },
  {
    name: "The Lovers",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-lovers.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-lovers.jpg")).uri,
    description: "Action, the power to manifest",
  },
  {
    name: "The Magician",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-magician.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-magician.jpg")).uri,
    description: "Intention, resourcefulness, power",
  },
  {
    name: "The High Priestess",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-high-priestess.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/high-priestess.jpg")).uri,
    description: "Intuition, the subconscious mind, mystery",
  },
  {
    name: "The Empress",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-empress.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-empress.jpg")).uri,
    description: "Femininity, beauty, nature",
  },
  {
    name: "The Emperor",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-emperor.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-emperor.jpg")).uri,
    description: "Authority, establishment, structure",
  },
  {
    name: "The Hierophant",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-hierophant.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-hierophant.jpg")).uri,
    description: "Tradition, conformity, morality",
  },
  {
    name: "The Chariot",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-chariot.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-chariot.jpg")).uri,
    description: "Direction, control, willpower",
  },
  {
    name: "Justice",
    image:
      Platform.OS === "web"
        ? "/assets/images/justice.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/justice.jpg")).uri,
    description: "Justice, truth, cause and effect",
  },
  {
    name: "The Hermit",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-hermit.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-hermit.jpg")).uri,
    description: "Soul-searching, introspection, being alone",
  },
  {
    name: "Wheel of Fortune",
    image:
      Platform.OS === "web"
        ? "/assets/images/wheel-of-fortune.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/wheel-of-fortune.jpg"))
            .uri,
    description: "Good luck, karma, life cycles",
  },
  {
    name: "The Hanged Man",
    image:
      Platform.OS === "web"
        ? "/assets/images/hanged-man.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/hanged-man.jpg")).uri,
    description: "Sacrifice, release, martyrdom",
  },
  {
    name: "Death",
    image:
      Platform.OS === "web"
        ? "/assets/images/death.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/death.jpg")).uri,
    description: "Endings, change, transformation",
  },
  {
    name: "Temperance",
    image:
      Platform.OS === "web"
        ? "/assets/images/temperance.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/temperance.jpg")).uri,
    description: "Balance, moderation, patience",
  },
  {
    name: "The Devil",
    image:
      Platform.OS === "web"
        ? "/assets/images/devil.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/devil.jpg")).uri,
    description: "Materialism, ignorance, bondage",
  },
  {
    name: "The Tower",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-tower.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-tower.jpg")).uri,
    description: "Disaster, upheaval, sudden change",
  },
  {
    name: "The Star",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-star.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-star.jpg")).uri,
    description: "Hope, spirituality, renewal",
  },
  {
    name: "The Moon",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-moon.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-moon.jpg")).uri,
    description: "Illusion, fear, anxiety",
  },
  {
    name: "The Sun",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-sun.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-sun.jpg")).uri,
    description: "Joy, success, celebration",
  },
  {
    name: "Judgement",
    image:
      Platform.OS === "web"
        ? "/assets/images/judgement.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/judgement.jpg")).uri,
    description: "Judgement, rebirth, inner calling",
  },
  {
    name: "The World",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-world.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/the-world.jpg")).uri,
    description: "Completion, integration, accomplishment",
  },
  // Add more cards here
];
