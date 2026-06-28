# Arithmetic Visual and Title Changes

This file explains the new changes and what each changed piece of code is doing.

## 1. Showing Fruits and Numbers Together

File changed:

```text
src/components/GameEngine.jsx
```

What changed:

- Before, addition and subtraction showed only fruit pictures.
- Now the app shows the fruit picture first.
- Under the fruit picture, it also shows the number equation.

Example for addition:

```text
🍎 🍎     +     🍎 🍎 🍎

2 + 3 = ?
```

Example for subtraction:

```text
🍌 🍌 🍌 🍌 🍌
some bananas faded out

5 - 2 = ?
```

Why:

- The child can connect the visual objects to the math numbers.
- The fruit teaches the meaning.
- The number equation teaches the symbol form.

## 2. `fruitIcons`

File:

```text
src/components/GameEngine.jsx
```

Code idea:

```js
const fruitIcons = {
  apple: "🍎",
  banana: "🍌",
};
```

What it does:

- This is a small lookup object.
- If a question says `fruit: "apple"`, the app displays an apple.
- If a question says `fruit: "banana"`, the app displays a banana.

Beginner meaning:

- It is like a tiny dictionary.
- The word `"apple"` points to the picture `🍎`.

## 3. `FruitGroup`

File:

```text
src/components/GameEngine.jsx
```

What it does:

- Draws a group of fruit.
- If `count` is `5`, it draws 5 fruits.
- If `fadedCount` is used, the last few fruits become faded.

Why `fadedCount` exists:

- Subtraction needs to show fruit being taken away.
- Instead of deleting the fruit completely, faded fruit lets the child see what was removed.

Example:

```text
left: 5
right: 2
```

Means:

```text
show 5 fruits, fade 2 of them
```

## 4. `NumberEquation`

File:

```text
src/components/GameEngine.jsx
```

What it does:

- Shows the number version of the question under the fruit.

For counting:

```text
3
```

For addition:

```text
2 + 3 = ?
```

For subtraction:

```text
5 - 2 = ?
```

Why it was added:

- The app should not only show fruits.
- It should show the fruits and the numbers together.
- This helps children connect real objects to math notation.

## 5. `QuestionVisual`

File:

```text
src/components/GameEngine.jsx
```

What it does:

- Decides what visual layout to show based on the lesson type.

If the lesson type is:

```text
counting
```

It shows:

```text
fruit group
number
```

If the lesson type is:

```text
addition
```

It shows:

```text
left fruit group + right fruit group
number equation below
```

If the lesson type is:

```text
subtraction
```

It shows:

```text
fruit group with some faded fruit
number equation below
```

Beginner meaning:

- `QuestionVisual` is like a traffic controller for the picture area.
- It asks: "What kind of lesson is this?"
- Then it chooses the correct display.

## 6. Module Logos

File changed:

```text
src/config/lessonsConfig.js
```

What changed:

```text
Counting    -> 🔢
Addition    -> ➕
Subtraction -> ➖
```

Why:

- These icons match the learning goal more directly.
- The old icons were fruit-themed, but they did not clearly show the type of math.

## 7. Where to Change the Home Title

File changed:

```text
src/components/ModuleMap.jsx
```

The title is now stored near the top of the file:

```js
const HOME_TITLE = "Fruit Math Fun";
```

To change the home page title, edit only that line.

Example:

```js
const HOME_TITLE = "Happy Number Garden";
```

Why I moved it:

- Before, the title text was inside the JSX.
- Now it is easier to find.
- A beginner can change the title without searching through the whole page layout.

## 8. `ModuleMap`

File:

```text
src/components/ModuleMap.jsx
```

What it does:

- Shows the home page.
- Shows the app title.
- Loops through all modules from `lessonsConfig.js`.
- Creates one large card for each module.

Important title line:

```jsx
{HOME_TITLE}
```

That means:

- React will display whatever text is stored in `HOME_TITLE`.

## 9. `modulesConfig`

File:

```text
src/config/lessonsConfig.js
```

What it does:

- Stores the module names.
- Stores the lesson names.
- Stores the questions.
- Stores which fruit each question uses.
- Stores the module icon.

Beginner meaning:

- This file is the app's lesson data.
- If you want to change what the child learns, start here.
