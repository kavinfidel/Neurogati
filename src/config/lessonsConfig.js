/*
  This file is the "brain" of the learning app.

  The screens should not hard-code lesson names or questions.
  Instead, screens import this data and display it.
*/

export const modulesConfig = [
  {
    id: "module-1",
    title: "1. Numbers Introduction",
    description:
      "Learn to recognize and count numbers visually using everyday objects.",
    themeColor: "from-amber-400 to-orange-500",
    lessons: [
      {
        id: "num-1",
        title: "Counting 1 to 5",
        type: "counting",
        questions: [
          { id: "num-1-q1", prompt: "How many dots do you see?", visualCount: 3, answer: 3, choices: [2, 3, 4] },
          { id: "num-1-q2", prompt: "How many dots do you see?", visualCount: 5, answer: 5, choices: [3, 4, 5] },
        ],
      },
      {
        id: "num-2",
        title: "Counting 6 to 10",
        type: "counting",
        questions: [
          { id: "num-2-q1", prompt: "How many dots do you see?", visualCount: 6, answer: 6, choices: [5, 6, 7] },
          { id: "num-2-q2", prompt: "How many dots do you see?", visualCount: 9, answer: 9, choices: [8, 9, 10] },
        ],
      },
    ],
  },
  {
    id: "module-2",
    title: "2. Playful Addition",
    description: "Combine groups together to make bigger numbers.",
    themeColor: "from-emerald-400 to-teal-500",
    lessons: [
      {
        id: "add-1",
        title: "Single Digit Addition",
        type: "addition",
        questions: [
          { id: "add-1-q1", prompt: "What is 1 + 3?", left: 1, right: 3, answer: 4, choices: [3, 4, 5] },
          { id: "add-1-q2", prompt: "What is 2 + 5?", left: 2, right: 5, answer: 7, choices: [6, 7, 8] },
        ],
      },
      {
        id: "add-2",
        title: "Single + Double Addition",
        type: "addition",
        questions: [
          { id: "add-2-q1", prompt: "What is 4 + 12?", left: 4, right: 12, answer: 16, choices: [14, 16, 18] },
          { id: "add-2-q2", prompt: "What is 6 + 10?", left: 6, right: 10, answer: 16, choices: [15, 16, 17] },
        ],
      },
      {
        id: "add-3",
        title: "Double + Double Addition",
        type: "addition",
        questions: [
          { id: "add-3-q1", prompt: "What is 11 + 23?", left: 11, right: 23, answer: 34, choices: [32, 34, 36] },
          { id: "add-3-q2", prompt: "What is 12 + 15?", left: 12, right: 15, answer: 27, choices: [25, 27, 29] },
        ],
      },
    ],
  },
  {
    id: "module-3",
    title: "3. Friendly Subtraction",
    description: "Take things away step-by-step.",
    themeColor: "from-sky-400 to-blue-500",
    lessons: [
      {
        id: "sub-1",
        title: "Single Digit Subtraction",
        type: "subtraction",
        questions: [
          { id: "sub-1-q1", prompt: "What is 5 - 2?", left: 5, right: 2, answer: 3, choices: [2, 3, 4] },
          { id: "sub-1-q2", prompt: "What is 8 - 3?", left: 8, right: 3, answer: 5, choices: [4, 5, 6] },
        ],
      },
      {
        id: "sub-2",
        title: "Double - Single Subtraction",
        type: "subtraction",
        questions: [
          { id: "sub-2-q1", prompt: "What is 15 - 4?", left: 15, right: 4, answer: 11, choices: [10, 11, 12] },
          { id: "sub-2-q2", prompt: "What is 18 - 6?", left: 18, right: 6, answer: 12, choices: [11, 12, 13] },
        ],
      },
      {
        id: "sub-3",
        title: "Double - Double Subtraction",
        type: "subtraction",
        questions: [
          { id: "sub-3-q1", prompt: "What is 25 - 11?", left: 25, right: 11, answer: 14, choices: [12, 14, 16] },
          { id: "sub-3-q2", prompt: "What is 30 - 12?", left: 30, right: 12, answer: 18, choices: [16, 18, 20] },
        ],
      },
    ],
  },
];
