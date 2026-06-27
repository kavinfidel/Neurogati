export const modulesConfig = [
  {// teaching numbers and arithmetic to neurodegenerative kids 
    id: "module-1",
    title: "1. Numbers Introduction",
    description: "Learn to recognize and count numbers visually using everyday objects like apples, oranges,etc.",
    themeColor: "from-amber-400 to-orange-500", // Bright, warm colors for stimulating focus
    lessons: [
      { id: "num-1", title: "Counting 1 to 5", type: "counting", min: 1, max: 5 },
      { id: "num-2", title: "Counting 6 to 10", type: "counting", min: 6, max: 10 }
    ]
  },
  {
    id: "module-2",
    title: "2. Playful Addition",
    description: "Combine items(apples, bananas) together to make bigger numbers.",
    themeColor: "from-emerald-400 to-teal-500", // Calming green tones
    lessons: [
      { id: "add-1", title: "Single Digit (1 + 3)", type: "addition", digits: "single" },
      { id: "add-2", title: "Single + Double (4 + 12)", type: "addition", digits: "mixed" },
      { id: "add-3", title: "Double + Double (11 + 23)", type: "addition", digits: "double" }
    ]
  },
  {
    id: "module-3",
    title: "3. Friendly Subtraction; removing apples or other fruit from whole group",
    description: "Take things away step-by-step.",
    themeColor: "from-sky-400 to-blue-500", // Focused blue tones
    lessons: [
      { id: "sub-1", title: "Single Digit (5 - 2)", type: "subtraction", digits: "single" },
      { id: "sub-2", title: "Double - Single (15 - 4)", type: "subtraction", digits: "mixed" },
      { id: "sub-3", title: "Double - Double (25 - 11)", type: "subtraction", digits: "double" }
    ]
  }
];