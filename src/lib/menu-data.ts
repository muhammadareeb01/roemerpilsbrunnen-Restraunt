import { MenuItem, MenuCategory } from "./types";

export const CATEGORIES: MenuCategory[] = [
  { id: "vorspeisen", name: "Appetizers & Soups" },
  { id: "salate", name: "Salads" },
  { id: "frankfurter", name: "Frankfurt Specials" },
  { id: "spezialitaeten", name: "Traditional Dishes" },
  { id: "schnitzel", name: "Schnitzels" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks & Cider" },
];

export const MENU_ITEMS: MenuItem[] = [
  // Vorspeisen / Appetizers
  {
    id: "weinbergschnecken",
    name: "6 Weinbergschnecken",
    description: "6 Snails overbaked with hot herb butter, served with crispy toast.",
    price: 8.50,
    imageUrl: "/images/german-appetizers.png",
    isVeg: false,
    categoryId: "vorspeisen"
  },
  {
    id: "shrimpscocktail",
    name: "Shrimpscocktail",
    description: "Traditional cold shrimp cocktail served with butter and toast.",
    price: 9.90,
    imageUrl: "/images/german-appetizers.png",
    isVeg: false,
    categoryId: "vorspeisen"
  },
  {
    id: "leberknoedelsuppe",
    name: "Leberknödelsuppe",
    description: "Fresh homemade beef broth with a large, fluffy liver dumpling and chopped chives.",
    price: 5.90,
    imageUrl: "/images/german-appetizers.png",
    isVeg: false,
    categoryId: "vorspeisen"
  },
  {
    id: "zwiebelsuppe",
    name: "Französische Zwiebelsuppe",
    description: "Classic French onion soup topped with melted cheese croutons.",
    price: 6.20,
    imageUrl: "/images/german-appetizers.png",
    isVeg: true,
    categoryId: "vorspeisen"
  },

  // Salate / Salads
  {
    id: "beilagensalat",
    name: "Beilagensalat",
    description: "A mixed plate of fresh seasonal salad greens with house vinaigrette.",
    price: 5.50,
    imageUrl: "/images/german-appetizers.png",
    isVeg: true,
    categoryId: "salate"
  },
  {
    id: "salat-pute",
    name: "Mixed Salad with Turkey",
    description: "Large bowl of fresh seasonal salad topped with tender strips of pan-fried turkey breast.",
    price: 12.50,
    imageUrl: "/images/german-appetizers.png",
    isVeg: false,
    categoryId: "salate"
  },

  // Frankfurter Spezialitäten
  {
    id: "rippchen",
    name: "Frankfurter Rippchen",
    description: "Traditional hot cured pork chop served with warm sauerkraut and boiled potatoes.",
    price: 13.90,
    imageUrl: "/images/frankfurt-plate.png",
    isVeg: false,
    categoryId: "frankfurter"
  },
  {
    id: "tafelspitz",
    name: "Klassischer Tafelspitz",
    description: "Tender boiled beef brisket served with traditional creamy horseradish sauce and potatoes.",
    price: 16.50,
    imageUrl: "/images/frankfurt-plate.png",
    isVeg: false,
    categoryId: "frankfurter"
  },
  {
    id: "handkaes",
    name: "Handkäs' mit Musik",
    description: "Local sour milk cheese marinated with vinegar, oil, onions, and caraway seeds, served with bread and butter.",
    price: 6.50,
    imageUrl: "/images/frankfurt-plate.png",
    isVeg: true,
    categoryId: "frankfurter"
  },

  // Spezialitäten / Specialties
  {
    id: "schweinshaxe",
    name: "Daily Fresh Schweinshaxe",
    description: "Crispy, golden-roasted knuckle of pork, served with sauerkraut and farmhouse bread.",
    price: 17.90,
    imageUrl: "/images/frankfurt-plate.png",
    isVeg: false,
    categoryId: "spezialitaeten"
  },
  {
    id: "cordon-bleu",
    name: "Cordon Bleu vom Schwein",
    description: "Pork Cordon Bleu filled with juicy ham and melted cheese, served with crispy croquettes.",
    price: 16.50,
    imageUrl: "/images/frankfurt-plate.png",
    isVeg: false,
    categoryId: "spezialitaeten"
  },
  {
    id: "jaegertopf",
    name: "Jägertopf Pork Fillet",
    description: "Pork fillets served in a rich and savory mushroom cream sauce with fried potatoes.",
    price: 18.90,
    imageUrl: "/images/frankfurt-plate.png",
    isVeg: false,
    categoryId: "spezialitaeten"
  },

  // Schnitzels
  {
    id: "schnitzel-wiener",
    name: "Schnitzel Wiener Art",
    description: "Golden breaded pork cutlet served with lemon wedges and French fries.",
    price: 12.90,
    imageUrl: "/images/frankfurt-plate.png",
    isVeg: false,
    categoryId: "schnitzel"
  },
  {
    id: "jaegerschnitzel",
    name: "Jägerschnitzel",
    description: "Breaded pork schnitzel topped with a rich champignon mushroom gravy, served with French fries.",
    price: 14.50,
    imageUrl: "/images/frankfurt-plate.png",
    isVeg: false,
    categoryId: "schnitzel"
  },
  {
    id: "schnitzel-hawaii",
    name: "Schnitzel Hawaii",
    description: "Breaded pork schnitzel baked with sliced sweet pineapple and cheese, served with French fries.",
    price: 14.90,
    imageUrl: "/images/frankfurt-plate.png",
    isVeg: false,
    categoryId: "schnitzel"
  },

  // Desserts
  {
    id: "apfelstrudel",
    name: "Heißer Apfelstrudel",
    description: "Warm German apple strudel served with whipped cream and a scoop of vanilla ice cream.",
    price: 5.90,
    imageUrl: "/images/apfelstrudel-dessert.png",
    isVeg: true,
    categoryId: "desserts"
  },

  // Drinks
  {
    id: "roemer-pils",
    name: "Binding Römer Pils",
    description: "Traditional local premium Frankfurt Pilsner draft beer, poured fresh.",
    price: 3.50,
    imageUrl: "/images/hero-pils.png",
    isVeg: true,
    categoryId: "drinks"
  },
  {
    id: "apfelwein",
    name: "Frankfurter Apfelwein",
    description: "The traditional local Frankfurt apple wine (cider), fresh and crisp.",
    price: 3.20,
    imageUrl: "/images/hero-pils.png",
    isVeg: true,
    categoryId: "drinks"
  },
  {
    id: "schoefferhofer",
    name: "Schöfferhofer Weizen",
    description: "A classic refreshing German wheat beer (Hefe-Weizen).",
    price: 4.50,
    imageUrl: "/images/hero-pils.png",
    isVeg: true,
    categoryId: "drinks"
  }
];
