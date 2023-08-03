import Image from "next/image";

export const signUpFields = [
  { label: "Login:", name: "Login", placeholder: "anmstudios21c@gmail.com" },
  { label: "Password:", name: "Password", placeholder: "········" },
  {
    label: "Cumfirm Password:",
    name: "Password2",
    placeholder: "········",
  },
];

export const loginFields = [
  { label: "Login:", name: "Login", placeholder: "anmstudios21c@gmail.com" },
  { label: "Password:", name: "Password", placeholder: "········" },
];

export const loginButtonsComponent = [
  {
    content: (
      <>
        Login With
        <Image alt="google icon" src="/googlelogo.svg" width={25} height={25} />
      </>
    ),
    classname: "red",
    route: "/auth/google",
    type: "button",
  },
  {
    content: "Sign Up",
    classname: "tertiary",
    route: "/sign-up",
    type: "button",
  },
];

export const newPasswordFields = [
  {
    label: "Enter your Email:",
    name: "Login",
    placeholder: "anmstudios21c@gmail.com",
  },
];

export const userDropdown = [
  { label: "Light", value: "1" },
  { label: "Moderate", value: "2" },
  { label: "Extreme", value: "3" },
  { label: "Rare Exercise", value: "4" },
];

export const optionsPreference = [
  { value: "chocolate", label: "Chocolate 🍫" },
  { value: "strawberry", label: "Strawberry 🍓" },
  { value: "vanilla", label: "Vanilla 🍦" },
  { value: "bacon", label: "Bacon 🥓" },
  { value: "cheese", label: "Cheese 🧀" },
  { value: "garlic", label: "Garlic 🧄" },
  { value: "basil", label: "Basil 🌿" },
  { value: "oregano", label: "Oregano 🌿" },
  { value: "cinnamon", label: "Cinnamon 🌰" },
  { value: "nutmeg", label: "Nutmeg 🌰" },
  { value: "ginger", label: "Ginger 🌱" },
  { value: "honey", label: "Honey 🍯" },
  { value: "lemon", label: "Lemon 🍋" },
  { value: "mint", label: "Mint 🌱" },
  { value: "olive_oil", label: "Olive Oil 🫒" },
  { value: "peanut_butter", label: "Peanut Butter 🥜" },
  { value: "almonds", label: "Almonds 🌰" },
  { value: "avocado", label: "Avocado 🥑" },
  { value: "blueberries", label: "Blueberries 🔵" },
  { value: "spinach", label: "Spinach 🥬" },
];

export const optionsIndifference = [
  { value: "peanuts", label: "Peanuts 🥜" },
  { value: "shellfish", label: "Shellfish 🦞" },
  { value: "milk", label: "Milk 🥛" },
  { value: "eggs", label: "Eggs 🥚" },
  { value: "soy", label: "Soy 🌱" },
  { value: "wheat", label: "Wheat 🌾" },
  { value: "fish", label: "Fish 🐟" },
  { value: "tree_nuts", label: "Tree Nuts 🌰" },
  { value: "sesame_seeds", label: "Sesame Seeds 🌱" },
  { value: "mustard", label: "Mustard 🌭" },
  { value: "sulfites", label: "Sulfites 🍷" },
  { value: "gluten", label: "Gluten 🍞" },
  { value: "lactose", label: "Lactose 🧀" },
  { value: "corn", label: "Corn 🌽" },
  { value: "caffeine", label: "Caffeine ☕" },
  { value: "chocolate", label: "Chocolate 🍫" },
  { value: "garlic", label: "Garlic 🧄" },
  { value: "onions", label: "Onions 🧅" },
  { value: "spicy_food", label: "Spicy Food 🌶️" },
  { value: "artificial_sweeteners", label: "Artificial Sweeteners 🍬" },
];

export const dietOptions = [
  { label: "Fusion", value: "1" },
  { label: "Keto", value: "2" },
  { label: "Gluten Free", value: "3" },
  { label: "Comfort Food", value: "4" },
  { label: "Exotic Insects", value: "5" },
  { label: "Halal", value: "6" },
  { label: "Kosher", value: "7" },
];

export const weightOptions = [
  { label: "Gain Weight", value: "1" },
  { label: "Lose Weight", value: "2" },
  { label: "Maintain Weight", value: "3" },
];
export const weekMeal = [
  {
    day: "Monday",
    meals: [
      {
        time: "Breakfast",
        content: [
          "Oatmeal with mixed berries",
          "Scrambled eggs",
          "Greek yogurt with granola",
        ],
      },
      {
        time: "Lunch",
        content: ["Chicken Salad", "Brown Rice", "Steamed Vegetables"],
      },
      {
        time: "Dinner",
        content: ["Grilled Salmon", "Quinoa", "Mixed Vegetables"],
      },
    ],
  },
  {
    day: "Tuesday",
    meals: [
      {
        time: "Breakfast",
        content: [
          "Whole Grain Toast with Avocado",
          "Scrambled eggs",
          "Greek yogurt with granola",
        ],
      },
      { time: "Lunch", content: ["Tuna Salad", "Sweet Potato", "Green Beans"] },
      {
        time: "Dinner",
        content: ["Steak", "Baked Potato", "Steamed Broccoli"],
      },
    ],
  },
  {
    day: "Wednesday",
    meals: [
      {
        time: "Breakfast",
        content: [
          "Oatmeal with Banana and Honey",
          "Boiled eggs",
          "Greek yogurt with granola",
        ],
      },
      { time: "Lunch", content: ["Chicken Wrap", "Mixed Salad", "Fruit"] },
      {
        time: "Dinner",
        content: ["Pasta with Tomato Sauce", "Salad", "Garlic Bread"],
      },
    ],
  },
  {
    day: "Thursday",
    meals: [
      {
        time: "Breakfast",
        content: [
          "Pancakes with Syrup",
          "Scrambled eggs",
          "Greek yogurt with granola",
        ],
      },
      { time: "Lunch", content: ["Turkey Sandwich", "Chips", "Apple"] },
      { time: "Dinner", content: ["Chicken Stir Fry", "Brown Rice"] },
    ],
  },
  {
    day: "Friday",
    meals: [
      {
        time: "Breakfast",
        content: [
          "French Toast",
          "Scrambled eggs",
          "Greek yogurt with granola",
        ],
      },
      { time: "Lunch", content: ["Pasta Salad", "Bread Roll", "Orange"] },
      { time: "Dinner", content: ["Pizza", "Side Salad"] },
    ],
  },
  {
    day: "Saturday",
    meals: [
      {
        time: "Breakfast",
        content: [
          "Cereal with Milk",
          "Fruit Salad",
          "Greek yogurt with granola",
        ],
      },
      { time: "Lunch", content: ["BLT Sandwich", "Crisps", "Banana"] },
      {
        time: "Dinner",
        content: ["BBQ Ribs", "Corn on the Cob", "Baked Beans"],
      },
    ],
  },
  {
    day: "Sunday",
    meals: [
      {
        time: "Breakfast",
        content: [
          "Bagel with Cream Cheese",
          "Scrambled eggs",
          "Greek yogurt with granola",
        ],
      },
      {
        time: "Lunch",
        content: ["Roast Beef Sandwich", "Potato Salad", "Pickle"],
      },
      {
        time: "Dinner",
        content: ["Roast Chicken", "Roasted Potatoes", "Steamed Vegetables"],
      },
    ],
  },
];

export const cardsData = [
  {
    id: "complexId123",
    title: "My Sports Plan",
    description: "Plan designed to gain weight in short period of time.",
    date: "12/18/2024",
    calories: 2500,
    diet: {
      vegetarian: true,
      style: "Fusion",
    },
    image: "/wallpaper-demo.png",
  },
  {
    id: "complexId123",
    title: "Weight Loss Plan",
    description: "Plan designed to lose weight healthily.",
    date: "1/05/2025",
    calories: 1800,
    diet: {
      vegetarian: false,
      style: "Keto",
    },
    image: "/wallpaper-demo.png",
  },
  {
    id: "complexId123",
    title: "Maintenance Plan",
    description: "Plan designed to maintain current weight.",
    date: "2/25/2025",
    calories: 2000,
    diet: {
      vegetarian: true,
      style: "Gluten Free",
    },
    image: "/wallpaper-demo.png",
  },
  {
    id: "complexId123",
    title: "High-Protein Plan",
    description: "Plan designed to increase protein intake.",
    date: "3/15/2025",
    calories: 2200,
    diet: {
      vegetarian: false,
      style: "Exotic Insects",
    },
    image: "/wallpaper-demo.png",
  },
];
