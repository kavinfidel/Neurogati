/*
  This file is the "brain" of the learning app.

  The screens should not hard-code lesson names or questions.
  Instead, screens import this data and display it.
*/

export const modulesConfig = [
  {
    id: "module-1",
    title: "Counting",
    description: "Count the fruits one by one",
    themeColor: "from-yellow-300 via-orange-300 to-rose-400",
    icon: "🍎",
    lessons: [
      {
        id: "num-1",
        title: "Count 1 to 5",
        type: "counting",
        questions: [
          { id: "num-1-q1", prompt: "Count the apples.", fruit: "apple", visualCount: 3, answer: 3, choices: [2, 3, 4] },
          { id: "num-1-q2", prompt: "Count the bananas.", fruit: "banana", visualCount: 5, answer: 5, choices: [3, 4, 5] },
        ],
      },
      {
        id: "num-2",
        title: "Count 6 to 10",
        type: "counting",
        questions: [
          { id: "num-2-q1", prompt: "Count the apples.", fruit: "apple", visualCount: 6, answer: 6, choices: [5, 6, 7] },
          { id: "num-2-q2", prompt: "Count the bananas.", fruit: "banana", visualCount: 9, answer: 9, choices: [8, 9, 10] },
        ],
      },
    ],
  },
  {
    id: "module-2",
    title: "Addition",
    description: "Add the fruits together.",
    themeColor: "from-lime-300 via-emerald-300 to-cyan-400",
    icon: "🍌",
    lessons: [
      {
        id: "add-1",
        title: "Small Add",
        type: "addition",
        questions: [
          { id: "add-1-q1", prompt: "Add the apples.", fruit: "apple", left: 1, right: 3, answer: 4, choices: [3, 4, 5] },
          { id: "add-1-q2", prompt: "Add the bananas.", fruit: "banana", left: 2, right: 5, answer: 7, choices: [6, 7, 8] },
        ],
      },
      {
        id: "add-2",
        title: "Bigger Add",
        type: "addition",
        questions: [
          { id: "add-2-q1", prompt: "Add the apples.", fruit: "apple", left: 4, right: 12, answer: 16, choices: [14, 16, 18] },
          { id: "add-2-q2", prompt: "Add the bananas.", fruit: "banana", left: 6, right: 10, answer: 16, choices: [15, 16, 17] },
        ],
      },
      {
        id: "add-3",
        title: "Big Add",
        type: "addition",
        questions: [
          { id: "add-3-q1", prompt: "Add the apples.", fruit: "apple", left: 11, right: 23, answer: 34, choices: [32, 34, 36] },
          { id: "add-3-q2", prompt: "Add the bananas.", fruit: "banana", left: 12, right: 15, answer: 27, choices: [25, 27, 29] },
        ],
      },
    ],
  },
  {
    id: "module-3",
    title: "Subtraction",
    description: "Remove fruits from whole.",
    themeColor: "from-sky-300 via-blue-300 to-violet-400",
    icon: "🧺",
    lessons: [
      {
        id: "sub-1",
        title: "Small Take Away",
        type: "subtraction",
        questions: [
          { id: "sub-1-q1", prompt: "Take away apples.", fruit: "apple", left: 5, right: 2, answer: 3, choices: [2, 3, 4] },
          { id: "sub-1-q2", prompt: "Take away bananas.", fruit: "banana", left: 8, right: 3, answer: 5, choices: [4, 5, 6] },
        ],
      },
      {
        id: "sub-2",
        title: "Bigger Take Away",
        type: "subtraction",
        questions: [
          { id: "sub-2-q1", prompt: "Take away apples.", fruit: "apple", left: 15, right: 4, answer: 11, choices: [10, 11, 12] },
          { id: "sub-2-q2", prompt: "Take away bananas.", fruit: "banana", left: 18, right: 6, answer: 12, choices: [11, 12, 13] },
        ],
      },
      {
        id: "sub-3",
        title: "Big Take Away",
        type: "subtraction",
        questions: [
          { id: "sub-3-q1", prompt: "Take away apples.", fruit: "apple", left: 25, right: 11, answer: 14, choices: [12, 14, 16] },
          { id: "sub-3-q2", prompt: "Take away bananas.", fruit: "banana", left: 30, right: 12, answer: 18, choices: [16, 18, 20] },
        ],
      },
    ],
  },
];
