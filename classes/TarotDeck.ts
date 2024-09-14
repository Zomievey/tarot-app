import { Asset } from "expo-asset";
import { Platform } from "react-native";

export const tarotDeck = [
  {
    name: "The Fool",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-fool.jpg"
        : Asset.fromModule(require("../assets/images/the-fool.jpg")).uri,
    description:
      "New beginnings, adventure, and spontaneity. A leap of faith into the unknown, embracing optimism and trusting the journey.",
    reversedDescription:
      "Recklessness, carelessness, and naivety. The risks of poor judgment and fear of stepping into the unknown.",
  },
  {
    name: "The Lovers",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-lovers.jpg"
        : Asset.fromModule(require("../assets/images/the-lovers.jpg")).uri,
    description:
      "Union, harmony, and alignment. Deep connections, choices, and trust in relationships, signifying harmony and mutual respect.",
    reversedDescription:
      "Disharmony, imbalance, and indecision. A struggle with relationship values or facing conflicts that disrupt harmony.",
  },
  {
    name: "The Magician",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-magician.jpg"
        : Asset.fromModule(require("../assets/images/the-magician.jpg")).uri,
    description:
      "Manifestation, skill, and resourcefulness. The power to turn ideas into reality through focused intention and action.",
    reversedDescription:
      "Manipulation, trickery, and poor planning. Misuse of talents, deception, or feeling blocked in achieving one's goals.",
  },
  {
    name: "The High Priestess",
    image:
      Platform.OS === "web"
        ? "/assets/images/high-priestess.jpg"
        : Asset.fromModule(require("../assets/images/high-priestess.jpg")).uri,
    description:
      "Intuition, mystery, and inner wisdom. A call to trust the subconscious and explore the hidden depths within.",
    reversedDescription:
      "Secrets, repression, and disconnection. Ignoring inner knowledge or facing hidden truths that need to be uncovered.",
  },
  {
    name: "The Empress",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-empress.jpg"
        : Asset.fromModule(require("../assets/images/the-empress.jpg")).uri,
    description:
      "Fertility, abundance, and nurturing. A symbol of creativity, nature's bounty, and the nurturing aspects of life.",
    reversedDescription:
      "Insecurity, neglect, and creative block. A lack of growth or feeling dependent on external sources for fulfillment.",
  },
  {
    name: "The Emperor",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-emperor.jpg"
        : Asset.fromModule(require("../assets/images/the-emperor.jpg")).uri,
    description:
      "Authority, structure, and stability. The embodiment of leadership, discipline, and the strength that comes from order.",
    reversedDescription:
      "Domination, rigidity, and lack of flexibility. An overbearing approach or a struggle with authority and control.",
  },
  {
    name: "The Hierophant",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-hierophant.jpg"
        : Asset.fromModule(require("../assets/images/the-hierophant.jpg")).uri,
    description:
      "Tradition, conformity, and spiritual wisdom. Following established paths, seeking guidance, and embracing conventional values.",
    reversedDescription:
      "Nonconformity, rebellion, and challenging norms. Breaking free from traditions and questioning established beliefs and the status quo.",
  },
  {
    name: "The Chariot",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-chariot.jpg"
        : Asset.fromModule(require("../assets/images/the-chariot.jpg")).uri,
    description:
      "Determination, control, and triumph. Forward movement, overcoming obstacles through sheer willpower and focused direction.",
    reversedDescription:
      "Lack of direction, loss of control, and obstacles. A need to reassess the path forward amidst confusion or scattered energies.",
  },
  {
    name: "Strength",
    image:
      Platform.OS === "web"
        ? "/assets/images/strength.jpg"
        : Asset.fromModule(require("../assets/images/strength.jpg")).uri,
    description:
      "Courage, patience, and inner strength. Mastery of emotions and the quiet power of compassion and resilience.",
    reversedDescription:
      "Self-doubt, weakness, and raw emotions, feeling overwhelmed. Struggles with inner strength and a need for self-compassion.",
  },
  {
    name: "Justice",
    image:
      Platform.OS === "web"
        ? "/assets/images/justice.jpg"
        : Asset.fromModule(require("../assets/images/justice.jpg")).uri,
    description:
      "Fairness, truth, and balance. A call for accountability, embracing clarity, and making decisions with impartiality.",
    reversedDescription:
      "Unfairness, dishonesty, and lack of accountability. A time when biases or unresolved issues cloud judgment.",
  },
  {
    name: "The Hermit",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-hermit.jpg"
        : Asset.fromModule(require("../assets/images/the-hermit.jpg")).uri,
    description:
      "Introspection, solitude, and soul-searching. Seeking wisdom from within and finding guidance through inner reflection.",
    reversedDescription:
      "Isolation, withdrawal, and avoidance. A resistance to self-reflection or feelings of loneliness and disconnection.",
  },
  {
    name: "Wheel of Fortune",
    image:
      Platform.OS === "web"
        ? "/assets/images/wheel-of-fortune.jpg"
        : Asset.fromModule(require("../assets/images/wheel-of-fortune.jpg"))
            .uri,
    description:
      "Change, cycles, and destiny. The turning point in life's journey, where fortune shifts and new opportunities arise.",
    reversedDescription:
      "Misfortune, resistance to change, and stagnation. Feeling stuck or facing setbacks as the wheel turns unpredictably.",
  },
  {
    name: "The Hanged Man",
    image:
      Platform.OS === "web"
        ? "/assets/images/hanged-man.jpg"
        : Asset.fromModule(require("../assets/images/hanged-man.jpg")).uri,
    description:
      "Surrender, letting go, and new perspectives. A pause that allows for a different view, encouraging patience and insight.",
    reversedDescription:
      "Stalling, resistance, and indecision. Avoidance of change or an unwillingness to make necessary sacrifices.",
  },
  {
    name: "Death",
    image:
      Platform.OS === "web"
        ? "/assets/images/death.jpg"
        : Asset.fromModule(require("../assets/images/death.jpg")).uri,
    description:
      "Endings, transformation, and rebirth. A time of profound change, signifying the closing of one chapter and the start of another.",
    reversedDescription:
      "Resistance to change, fear of endings, and stagnation. Holding onto the past, preventing transformation and renewal.",
  },
  {
    name: "Temperance",
    image:
      Platform.OS === "web"
        ? "/assets/images/temperance.jpg"
        : Asset.fromModule(require("../assets/images/temperance.jpg")).uri,
    description:
      "Balance, moderation, and harmony. Blending energies and finding the middle path through patience and adaptability.",
    reversedDescription:
      "Imbalance, excess, and disharmony. Overindulgence, impatience, or a need to restore equilibrium in life.",
  },
  {
    name: "The Devil",
    image:
      Platform.OS === "web"
        ? "/assets/images/devil.jpg"
        : Asset.fromModule(require("../assets/images/devil.jpg")).uri,
    description:
      "Bondage, addiction, and materialism. Feeling trapped by temptations, negative patterns, or unhealthy attachments.",
    reversedDescription:
      "Freedom, release, and breaking free. Overcoming dependencies and reclaiming personal power from limiting influences.",
  },
  {
    name: "The Tower",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-tower.jpg"
        : Asset.fromModule(require("../assets/images/the-tower.jpg")).uri,
    description:
      "Upheaval, sudden change, and revelation. A moment of chaos that shatters illusions, paving the way for new awareness.",
    reversedDescription:
      "Avoidance, fear of change, and delaying the inevitable. Holding onto stability at the cost of growth and transformation.",
  },
  {
    name: "The Star",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-star.jpg"
        : Asset.fromModule(require("../assets/images/the-star.jpg")).uri,
    description:
      "Hope, inspiration, and renewal. A time of healing, spiritual guidance, and the rekindling of faith in the future.",
    reversedDescription:
      "Despair, lack of faith, and disconnection. A period of feeling lost, with a need to reconnect to hope and inner light.",
  },
  {
    name: "The Moon",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-moon.jpg"
        : Asset.fromModule(require("../assets/images/the-moon.jpg")).uri,
    description:
      "Illusion, intuition, and dreams. Navigating through uncertainty and trusting the subconscious mind for guidance.",
    reversedDescription:
      "Clarity, truth, and overcoming fear. Dispelling illusions, revealing hidden truths, and gaining a clearer perspective.",
  },
  {
    name: "The Sun",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-sun.jpg"
        : Asset.fromModule(require("../assets/images/the-sun.jpg")).uri,
    description:
      "Joy, success, and vitality. A burst of positivity, bringing clarity, warmth, and a sense of achievement.",
    reversedDescription:
      "Temporary setbacks, delays, and lack of clarity. Facing obstacles to happiness or experiencing moments of self-doubt.",
  },
  {
    name: "Judgement",
    image:
      Platform.OS === "web"
        ? "/assets/images/judgement.jpg"
        : Asset.fromModule(require("../assets/images/judgement.jpg")).uri,
    description:
      "Awakening, reflection, and renewal. A call for self-evaluation, embracing transformation, and listening to a higher calling.",
    reversedDescription:
      "Self-doubt, criticism, and ignoring the call. Avoidance of change or struggling with the inner critic.",
  },
  {
    name: "The World",
    image:
      Platform.OS === "web"
        ? "/assets/images/the-world.jpg"
        : Asset.fromModule(require("../assets/images/the-world.jpg")).uri,
    description:
      "Completion, fulfillment, and integration. The culmination of a journey, achieving goals, and experiencing a sense of wholeness.",
    reversedDescription:
      "Lack of closure, delays, and feeling incomplete. Unfinished business or obstacles preventing the completion of a cycle.",
  },
  {
    name: "Ace of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/ace-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/ace-wands.jpg")).uri,
    description:
      "Inspiration, new beginnings, potential, creative force. This card indicates a surge of creativity and the birth of a new idea or project.",
    reversedDescription:
      "Delays, lack of direction, missed opportunities. You might feel unmotivated or unable to harness your creative energy.",
  },
  {
    name: "Two of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/two-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/two-wands.jpg")).uri,
    description:
      "Planning, decision-making, progress. You are in the process of mapping out a plan and setting goals for the future.",
    reversedDescription:
      "Fear of change, lack of planning, indecision. You may feel uncertain about the next steps or hesitant to move forward.",
  },
  {
    name: "Three of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/three-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/three-wands.jpg")).uri,
    description:
      "Expansion, foresight, progress. You've laid the groundwork, and now you're starting to see the results of your efforts.",
    reversedDescription:
      "Playing it safe, delays, obstacles, lack of foresight. Your plans may face unexpected challenges, or you might be feeling stuck.",
  },
  {
    name: "Four of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/four-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/four-wands.jpg")).uri,
    description:
      "Celebration, harmony, homecoming. This card signifies joyous events, stability, and a sense of belonging.",
    reversedDescription:
      "Conflict, lack of stability, feeling unwelcome. There may be tension or a lack of harmony in your environment.",
  },
  {
    name: "Five of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/five-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/five-wands.jpg")).uri,
    description:
      "Conflict, competition, disagreements. This card often indicates challenges, but they can be productive and help you grow.",
    reversedDescription:
      "Avoiding conflict, inner turmoil, resolution. You might be stepping away from conflict or finding ways to resolve disputes.",
  },
  {
    name: "Six of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/six-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/six-wands.jpg")).uri,
    description:
      "Success, recognition, achievement. You've overcome obstacles and are now receiving recognition for your efforts.",
    reversedDescription:
      "Failure, lack of recognition, self-doubt. You may feel overlooked or insecure about your achievements.",
  },
  {
    name: "Seven of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/seven-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/seven-wands.jpg")).uri,
    description:
      "Perseverance, defense, maintaining control. You are standing your ground and defending your position against opposition.",
    reversedDescription:
      "Overwhelmed, giving up, feeling vulnerable. You might feel outnumbered or struggle to keep up with the demands.",
  },
  {
    name: "Eight of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/eight-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/eight-wands.jpg")).uri,
    description:
      "Rapid action, movement, swift progress. Things are happening quickly, and you're moving toward your goals at a fast pace.",
    reversedDescription:
      "Delays, frustration, obstacles. There may be setbacks or a sense of stagnation preventing you from moving forward.",
  },
  {
    name: "Nine of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/nine-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/nine-wands.jpg")).uri,
    description:
      "Resilience, courage, persistence. You're facing challenges but have the strength and determination to keep going.",
    reversedDescription:
      "Exhaustion, overwhelm, defensiveness. You might feel drained or overly protective, finding it hard to continue.",
  },
  {
    name: "Ten of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/ten-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/ten-wands.jpg")).uri,
    description:
      "Burden, responsibility, hard work. You may be carrying a heavy load or taking on more than you can handle.",
    reversedDescription:
      "Release, avoiding responsibility, stress. It's time to let go of burdens or delegate tasks to avoid burnout.",
  },
  {
    name: "Page of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/page-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/page-wands.jpg")).uri,
    description:
      "Inspiration, exploration, potential. This card suggests the beginning of a new venture or a message of inspiration.",
    reversedDescription:
      "Lack of direction, procrastination, immaturity. You might be struggling to channel your creative energy effectively.",
  },
  {
    name: "Knight of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/knight-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/knight-wands.jpg")).uri,
    description:
      "Action, adventure, courage. The Knight of Wands is full of energy and ready to take bold action toward their goals.",
    reversedDescription:
      "Impulsiveness, recklessness, haste. There might be a risk of acting without thinking or becoming easily frustrated.",
  },
  {
    name: "Queen of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/queen-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/queen-wands.jpg")).uri,
    description:
      "Confidence, determination, independence. The Queen embodies passion, courage, and charisma, leading with enthusiasm.",
    reversedDescription:
      "Insecurity, jealousy, selfishness. You might be feeling uncertain about your abilities or dealing with a challenging individual.",
  },
  {
    name: "King of Wands",
    image:
      Platform.OS === "web"
        ? "/assets/images/king-wands.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/king-wands.jpg")).uri,
    description:
      "Leadership, vision, entrepreneurship. The King represents someone who is mature, inspiring, and a natural leader.",
    reversedDescription:
      "Impulsiveness, ruthlessness, overbearing. You might be struggling with control issues or acting too aggressively.",
  },
  {
    name: "Ace of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/ace-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/ace-cups.jpg")).uri,
    description:
      "New relationships, emotional awakening, love, compassion. This card signifies the beginning of emotional fulfillment and an outpouring of love and joy.",
    reversedDescription:
      "Emotional blockages, repressed feelings, emptiness. You may be feeling disconnected from your emotions or experiencing a lack of emotional fulfillment.",
  },
  {
    name: "Two of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/two-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/two-cups.jpg")).uri,
    description:
      "Partnership, harmony, mutual attraction, connection. This card represents a harmonious relationship, mutual respect, and emotional balance.",
    reversedDescription:
      "Imbalance, disharmony, broken communication. There might be conflict, misunderstanding, or a lack of connection in your relationships.",
  },
  {
    name: "Three of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/three-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/three-cups.jpg")).uri,
    description:
      "Celebration, friendship, joy, community. It signifies gatherings, social events, and a time of happiness shared with others and a sense of belonging.",
    reversedDescription:
      "Overindulgence, gossip, isolation, disharmony. You might be experiencing social tension, feeling left out, or overindulging in escapist behaviors.",
  },
  {
    name: "Four of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/four-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/four-cups.jpg")).uri,
    description:
      "Contemplation, apathy, reevaluation. This card suggests a period of introspection and the need to focus on what truly matters, often indicating dissatisfaction or boredom.",
    reversedDescription:
      "Awareness, acceptance, seizing opportunities. You're beginning to recognize the opportunities around you and move past feelings of stagnation.",
  },
  {
    name: "Five of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/five-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/five-cups.jpg")).uri,
    description:
      "Loss, regret, disappointment, grief. It represents emotional pain and the challenge of moving on from past hurts or losses.",
    reversedDescription:
      "Acceptance, moving on, healing. You're starting to let go of past griefs and are on the path to emotional recovery.",
  },
  {
    name: "Six of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/six-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/six-cups.jpg")).uri,
    description:
      "Nostalgia, memories, innocence, childhood. This card is about revisiting the past, reminiscing, and the joy that comes with innocent, simple pleasures.",
    reversedDescription:
      "Stuck in the past, unrealistic expectations. You may be overly focused on the past, preventing you from moving forward.",
  },
  {
    name: "Seven of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/seven-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/seven-cups.jpg")).uri,
    description:
      "Illusion, temptation, wishful thinking. It represents choices, opportunities, and the need to discern between reality and fantasy.",
    reversedDescription:
      "Clarity, decisiveness, reality check. You're beginning to see things as they are and can make choices that align with your values and goals.",
  },
  {
    name: "Eight of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/eight-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/eight-cups.jpg")).uri,
    description:
      "Walking away, seeking deeper meaning, letting go. This card signifies a journey of leaving behind what no longer serves you in search of something more fulfilling.",
    reversedDescription:
      "Fear of change, stagnation, avoiding the truth. You might be reluctant to leave a situation even though it no longer fulfills or serves you.",
  },
  {
    name: "Nine of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/nine-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/nine-cups.jpg")).uri,
    description:
      "Contentment, satisfaction, emotional fulfillment. Known as the 'wish card', it represents a sense of personal achievement and happiness.",
    reversedDescription:
      "Overindulgence, dissatisfaction, materialism. You may be feeling a sense of emptiness despite outward success or indulgence.",
  },
  {
    name: "Ten of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/ten-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/ten-cups.jpg")).uri,
    description:
      "Harmony, family, happiness, fulfillment. This card represents emotional contentment, lasting happiness in relationships, and a sense of unity.",
    reversedDescription:
      "Disconnection, misalignment, family strife. There might be disharmony or tension in your personal or family life.",
  },
  {
    name: "Page of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/page-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/page-cups.jpg")).uri,
    description:
      "Creativity, imagination, new feelings, curiosity. The Page of Cups brings messages of new emotional beginnings, creativity, and intuitive insights.",
    reversedDescription:
      "Emotional immaturity, escapism, creative blocks. You may be feeling out of touch with your emotions or struggling to express yourself creatively.",
  },
  {
    name: "Knight of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/knight-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/knight-cups.jpg")).uri,
    description:
      "Romance, charm, idealism, following the heart. The Knight of Cups is a dreamer and a romantic, pursuing emotional or creative goals with passion.",
    reversedDescription:
      "Moodiness, unrealistic expectations, over-idealism. You might be acting impulsively based on emotions or struggling with unrealistic expectations.",
  },
  {
    name: "Queen of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/queen-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/queen-cups.jpg")).uri,
    description:
      "Compassion, nurturing, intuition, emotional security. The Queen represents a deep connection to emotions and the ability to support others with empathy and care.",
    reversedDescription:
      "Emotional instability, co-dependency, insecurity. You may be feeling overwhelmed by your emotions or struggling with boundaries in relationships.",
  },
  {
    name: "King of Cups",
    image:
      Platform.OS === "web"
        ? "/assets/images/king-cups.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/king-cups.jpg")).uri,
    description:
      "Emotional balance, control, generosity, wisdom. The King embodies emotional maturity, offering support and understanding while maintaining his own emotional equilibrium.",
    reversedDescription:
      "Emotional manipulation, moodiness, volatility. There may be a struggle to manage emotions, leading to instability or manipulation.",
  },
  {
    name: "Ace of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/ace-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/ace-swords.jpg")).uri,
    description:
      "Breakthrough, clarity, new ideas, mental clarity. This card represents a fresh perspective, a new way of thinking, or a significant intellectual breakthrough.",
    reversedDescription:
      "Confusion, chaos, lack of clarity, poor judgment. There may be mental blockages, misinformation, or a struggle to find clarity.",
  },
  {
    name: "Two of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/two-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/two-swords.jpg")).uri,
    description:
      "Indecision, stalemate, difficult choices, denial. This card often indicates a need to make a challenging decision or a situation where you're avoiding facing the truth.",
    reversedDescription:
      "Clarity, decision, truth revealed. You're beginning to see things more clearly and are ready to make a choice or move past denial.",
  },
  {
    name: "Three of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/three-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/three-swords.jpg")).uri,
    description:
      "Heartbreak, sorrow, grief, betrayal. A card of emotional pain, it often signals heartbreak, separation, or deep disappointment.",
    reversedDescription:
      "Recovery, forgiveness, releasing pain. You're starting to heal from past wounds or moving on from a painful experience.",
  },
  {
    name: "Four of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/four-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/four-swords.jpg")).uri,
    description:
      "Rest, recuperation, contemplation, solitude. This card suggests a time for rest, meditation, and recovery after a period of stress or conflict.",
    reversedDescription:
      "Burnout, restlessness, refusal to rest. You may be feeling overwhelmed and in need of rest but are ignoring the signs.",
  },
  {
    name: "Five of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/five-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/five-swords.jpg")).uri,
    description:
      "Conflict, defeat, betrayal, loss. This card represents disputes, arguments, or a sense of hollow victory where winning comes at a cost. Feeling defeated.",
    reversedDescription:
      "Reconciliation, forgiveness, moving on. You're ready to make amends or move past a period of conflict.",
  },
  {
    name: "Six of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/six-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/six-swords.jpg")).uri,
    description:
      "Transition, moving on, leaving behind. This card signifies a journey towards healing, leaving difficulties behind, and moving towards a calmer state of mind.",
    reversedDescription:
      "Resistance to change, emotional baggage, stagnation. You may be struggling to move on or feeling stuck in a challenging situation.",
  },
  {
    name: "Seven of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/seven-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/seven-swords.jpg")).uri,
    description:
      "Deception, trickery, strategy, betrayal. This card often points to dishonesty, whether it's being cunning or being deceived by someone else.",
    reversedDescription:
      "Revelation, coming clean, rethinking tactics, self-deception. There's an opportunity to be honest, confess, or rethink your approach.",
  },
  {
    name: "Eight of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/eight-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/eight-swords.jpg")).uri,
    description:
      "Isolation, restriction, self-imposed prison. This card represents feeling trapped, powerless, or restricted by your own thoughts or circumstances.",
    reversedDescription:
      "Self-acceptance, freedom, release. You're starting to break free from limiting beliefs or situations that have held you back.",
  },
  {
    name: "Nine of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/nine-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/nine-swords.jpg")).uri,
    description:
      "Anxiety, worry, fear, nightmares. This card signifies mental anguish, worry, and fear, or guilt that keeps you up at night, often more imagined than real.",
    reversedDescription:
      "Hope, reaching out, overcoming fear. You may be beginning to face and overcome your fears or seeking help for your anxieties.",
  },
  {
    name: "Ten of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/ten-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/ten-swords.jpg")).uri,
    description:
      "Painful ending, betrayal, crisis, rock bottom. This card signifies a dramatic ending or a situation where things cannot get worse, signaling a need for acceptance and closure.",
    reversedDescription:
      "Recovery, regeneration, hope. You're beginning to heal from past wounds and find way to move forward.",
  },
  {
    name: "Page of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/page-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/page-swords.jpg")).uri,
    description:
      "Curiosity, new ideas, mental energy, communication. The Page brings news of new intellectual pursuits or a fresh perspective.",
    reversedDescription:
      "Deception, manipulation, lack of direction. There may be misunderstandings, scattered thoughts, or someone around you who is not trustworthy.",
  },
  {
    name: "Knight of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/knight-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/knight-swords.jpg")).uri,
    description:
      "Ambition, aggression, speed, directness. The Knight charges forward with determination, often representing a need for swift action or decisiveness.",
    reversedDescription:
      "Hasty decisions, impulsiveness, recklessness. You may be acting without thinking or causing harm with your words or actions.",
  },
  {
    name: "Queen of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/queen-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/queen-swords.jpg")).uri,
    description:
      "Perceptive, independent, clear-minded, unbiased. The Queen represents clarity of thought, the ability to cut through deception, and making decisions based on logic.",
    reversedDescription:
      "Cold-hearted, overly critical, distant. You may be feeling detached and struggling to connect with others emotionally.",
  },
  {
    name: "King of Swords",
    image:
      Platform.OS === "web"
        ? "/assets/images/king-swords.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/king-swords.jpg")).uri,
    description:
      "Intellectual power, authority, truth, discipline. The King symbolizes mastery of the mind, fairness, and the use of intellect to lead and make decisions.",
    reversedDescription:
      "Manipulation, cruelty, abusive power. There may be misuse of authority, or a tendency to be overly rigid and controlling. Using your intellect to deceive or manipulate others.",
  },
  {
    name: "Ace of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/ace-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/ace-pents.jpg")).uri,
    description:
      "New financial opportunity, prosperity, abundance. This card symbolizes the beginning of a new venture, career, or opportunity that can lead to material or financial gain.",
    reversedDescription:
      "Lost opportunity, lack of planning, scarcity. You may be missing out on a financial opportunity or feeling insecure about your financial stability.",
  },
  {
    name: "Two of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/two-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/two-pents.jpg")).uri,
    description:
      "Balance, adaptability, time management, juggling resources. This card suggests the need to balance multiple aspects of life, such as work and personal responsibilities.",
    reversedDescription:
      "Overwhelm, lack of balance, financial disarray. You may be struggling to manage your responsibilities or feeling overwhelmed by life's demands.",
  },
  {
    name: "Three of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/three-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/three-pents.jpg")).uri,
    description:
      "Teamwork, collaboration, learning, skill development. This card represents the power of working together towards a common goal and the rewards of cooperation and skill mastery.",
    reversedDescription:
      "Lack of teamwork, poor workmanship, misalignment. There may be a lack of cooperation, communication breakdown, or difficulties in working towards a shared objective.",
  },
  {
    name: "Four of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/four-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/four-pents.jpg")).uri,
    description:
      "Security, stability, holding on to resources, control. This card often indicates a need to be cautious with resources, focusing on saving, or guarding what you have.",
    reversedDescription:
      "Greed, materialism, over-attachment, loss. You may be holding on too tightly to material possessions or experiencing financial insecurity.",
  },
  {
    name: "Five of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/five-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/five-pents.jpg")).uri,
    description:
      "Financial loss, poverty, insecurity, isolation. This card often signals a period of hardship, whether it be financial difficulties, health issues, or a sense of being left out in the cold.",
    reversedDescription:
      "Recovery, improving finances, charity, spiritual richness. There may be a turn for the better, where you start to recover from a difficult situation or find support and help.",
  },
  {
    name: "Six of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/six-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/six-pents.jpg")).uri,
    description:
      "Generosity, charity, giving and receiving, sharing wealth. This card represents the balance of giving and receiving and the importance of sharing resources or help with others.",
    reversedDescription:
      "Debt, selfishness, inequality, strings attached. There might be an imbalance in the give-and-take dynamic, or assistance is being offered with conditions.",
  },
  {
    name: "Seven of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/seven-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/seven-pents.jpg")).uri,
    description:
      "Patience, hard work, delayed success, investment. This card suggests that your efforts and hard work are starting to pay off, but patience is needed for the full rewards to manifest.",
    reversedDescription:
      "Lack of growth, impatience, wasted effort. You might be feeling frustrated with slow progress or questioning whether your efforts are worth the investment.",
  },
  {
    name: "Eight of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/eight-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/eight-pents.jpg")).uri,
    description:
      "Skill development, apprenticeship, dedication, mastery. This card signifies hard work, learning new skills, and striving for mastery in a craft or profession.",
    reversedDescription:
      "Lack of focus, uninspired, lack of commitment. There may be a feeling of monotony, lack of interest, or a struggle to find the motivation to keep working on a task.",
  },
  {
    name: "Nine of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/nine-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/nine-pents.jpg")).uri,
    description:
      "Abundance, luxury, self-sufficiency, financial independence. This card represents the enjoyment of the fruits of your labor, financial independence, and personal success.",
    reversedDescription:
      "Overindulgence, dependence, financial setbacks. You may be struggling with financial dependence or overindulging in luxuries without considering future consequences.",
  },
  {
    name: "Ten of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/ten-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/ten-pents.jpg")).uri,
    description:
      "Wealth, inheritance, family legacy, long-term success. This card signifies financial stability, family legacy, and the culmination of efforts resulting in lasting security.",
    reversedDescription:
      "Financial failure, loss, instability, family disputes. There may be concerns over financial loss, instability, or family-related conflicts over money.",
  },
  {
    name: "Page of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/page-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/page-pents.jpg")).uri,
    description:
      "Ambition, desire, new venture, opportunity. The Page indicates the beginning of a new financial or educational endeavor and represents curiosity and the willingness to learn.",
    reversedDescription:
      "Lack of progress, short-sightedness, procrastination. There may be a lack of motivation, focus, or direction in pursuing your goals.",
  },
  {
    name: "Knight of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/knight-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/knight-pents.jpg")).uri,
    description:
      "Hard work, responsibility, productivity, routine. The Knight represents a diligent and responsible approach to achieving goals, emphasizing persistence and dedication.",
    reversedDescription:
      "Laziness, stubbornness, lack of progress. There might be a feeling of being stuck, overly cautious, or resistant to change and new methods.",
  },
  {
    name: "Queen of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/queen-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/queen-pents.jpg")).uri,
    description:
      "Nurturing, practicality, financial security, resourcefulness. The Queen embodies the nurturing, practical aspect of wealth and material comfort, focusing on providing for and supporting others.",
    reversedDescription:
      "Self-centeredness, work-life imbalance, smothering. There may be a focus on materialism at the expense of other areas of life or a tendency to be overprotective.",
  },
  {
    name: "King of Pentacles",
    image:
      Platform.OS === "web"
        ? "/assets/images/king-pents.jpg" // Static path for web
        : Asset.fromModule(require("../assets/images/king-pents.jpg")).uri,
    description:
      "Wealth, business acumen, discipline, power. The King signifies mastery over the material world, success in business, and a disciplined approach to managing resources.",
    reversedDescription:
      "Greed, corruption, material loss, stubbornness. There may be a misuse of power, obsession with wealth, or difficulty in managing finances responsibly.",
  },
];
