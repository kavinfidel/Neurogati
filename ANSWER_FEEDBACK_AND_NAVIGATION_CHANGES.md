# Answer Feedback and Navigation Changes

This file explains the changes made in:

```text
src/components/GameEngine.jsx
```

## 1. Correct and Incorrect Answer Colors

What changed:

- When the child clicks the correct answer, that answer button turns green.
- When the child clicks a wrong answer, that answer button turns red.
- Other answer buttons stay blue.

Why:

- Green gives clear positive feedback.
- Red gently shows that the selected answer was not correct.
- The child gets visual feedback immediately.

## 2. Small Confetti Celebration

What changed:

- When the child picks the correct answer, celebration symbols appear near the top:

```text
🎉 ⭐ 🎊
```

Why:

- It makes correct answers feel rewarding.
- It is simple and does not require installing a confetti library.

## 3. Delayed Move to the Next Question

What changed:

- Before, a correct answer moved to the next question immediately.
- Now the app waits for a short time before moving forward.

Current delay:

```js
1200
```

That means:

```text
1200 milliseconds = 1.2 seconds
```

Why:

- The child gets time to see the green button and celebration.
- The screen does not change too suddenly.

## 4. New Navigation Buttons

What changed:

- A `Previous` button was added.
- A `Next` button was added.
- The child can move backward and forward between questions.

Button behavior:

- `Previous` is disabled on the first question.
- `Next` is disabled on the last question.
- Moving between questions clears old feedback.

Why:

- A child, teacher, or parent can revisit a question.
- It makes the lesson feel less rigid.

## 5. Updated Import Line

Code changed:

```js
import { useEffect, useRef, useState } from "react";
```

What each one does:

- `useState` stores changing screen values.
- `useRef` stores the timer ID for the delayed next question.
- `useEffect` cleans up the timer when the component goes away.

Why `useRef` is useful here:

- `setTimeout` creates a timer.
- We need to remember that timer so we can cancel it if the child moves manually.

## 6. `selectedChoice`

Code idea:

```js
const [selectedChoice, setSelectedChoice] = useState(null);
```

What it does:

- Remembers which answer button the child clicked.

Example:

```text
choices: [3, 4, 5]
selectedChoice: 4
```

Meaning:

- The child clicked `4`.
- The app can color the `4` button.

## 7. `answerStatus`

Code idea:

```js
const [answerStatus, setAnswerStatus] = useState(null);
```

What it does:

- Remembers whether the selected answer is correct or incorrect.

Possible values:

```text
null
correct
incorrect
```

Meaning:

- `null`: no answer selected yet.
- `correct`: selected answer is right.
- `incorrect`: selected answer is wrong.

## 8. `nextQuestionTimer`

Code idea:

```js
const nextQuestionTimer = useRef(null);
```

What it does:

- Stores the delayed timer.

Why:

- When the child answers correctly, the app starts a timer.
- After 1.2 seconds, the timer moves to the next question.
- If the child uses navigation before then, the timer can be cleared.

## 9. `resetAnswerState`

What it does:

- Clears feedback text.
- Clears the selected answer.
- Clears whether the answer was correct or incorrect.
- Cancels any waiting timer.

Why:

- When moving to another question, old red or green colors should not remain.

## 10. `goToQuestion`

What it does:

- Moves to a specific question index.
- Resets the answer feedback before moving.

Beginner meaning:

- It is the helper used by both `Previous` and `Next`.

## 11. `goToPreviousQuestion`

What it does:

- Moves one question backward.
- It only works if the child is not already on the first question.

## 12. `goToNextQuestion`

What it does:

- Moves one question forward.
- It only works if the child is not already on the last question.

## 13. Updated `handleAnswer`

What it does now:

- Saves which choice was clicked.
- Checks if the choice is correct.
- If wrong, marks it red and shows `Try again.`
- If correct, marks it green and shows `Great job!`
- Starts a short timer before moving to the next question.

Important idea:

```js
if (choice !== currentQuestion.answer)
```

This means:

```text
If the clicked choice is not the correct answer...
```

Then the app marks it incorrect.

## 14. `getChoiceClass`

What it does:

- Decides which Tailwind color classes each answer button should use.

Color rules:

```text
not selected -> blue
selected and correct -> green
selected and incorrect -> red
```

Why:

- Keeping this logic in its own function makes the button JSX cleaner.

## 15. New Button Layout

What changed:

- The top of the game screen now has:

```text
Back    Previous    Next
```

Why:

- `Back` returns to the module map.
- `Previous` moves to the previous question.
- `Next` moves to the next question.

These are different jobs, so they are separate buttons.
