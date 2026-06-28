# Kids-Friendly UI Changes

This file explains the changes made to make the app feel easier, brighter, and more child-friendly.

## 1. Home Page Background

File changed:

```text
src/components/ModuleMap.jsx
```

What changed:

- The plain gray background was replaced with a colorful soft gradient.
- Floating fruit shapes were added in the background.
- The title was changed from a more formal phrase to:

```text
Fruit Math Fun
```

Why:

- The home screen is the first thing the child sees.
- A colorful, playful screen feels less like a test and more like a game.

## 2. Friendlier Modules

Files changed:

```text
src/config/lessonsConfig.js
src/components/ModuleMap.jsx
src/components/LessonCard.jsx
```

What changed:

- Module names are now simpler:

```text
Number Garden
Fruit Add-Up
Take-Away Picnic
```

- Each module now has a big visual icon:

```text
apple
banana
basket
```

- Lesson cards are larger, rounder, and more colorful.

Why:

- Children understand concrete themes better than abstract labels.
- "Fruit Add-Up" is easier to understand than "Playful Addition".
- "Take-Away Picnic" is easier than "Subtraction".

## 3. Simple App Words

Files changed:

```text
src/config/lessonsConfig.js
src/components/GameEngine.jsx
src/components/LessonCard.jsx
```

What changed:

- Longer text was replaced with short commands.

Examples:

```text
Count the apples.
Add the bananas.
Take away apples.
```

- Button/status words are shorter:

```text
Play
Done
Next
Back
```

Why:

- Simple words reduce cognitive load.
- This matters especially for children who may need slower, clearer learning steps.

## 4. Visual Apples and Bananas

File changed:

```text
src/components/GameEngine.jsx
```

What changed:

- The old `DotGroup` component was replaced with a `FruitGroup` component.
- Counting lessons now show apples or bananas.
- Addition lessons show two fruit groups with a plus sign between them.
- Subtraction lessons show the removed fruit faded out.

Why:

- Fruit gives the child something concrete to count.
- In addition, the child can see two groups being combined.
- In subtraction, the child can see some fruit being taken away.

## 5. Beginner Code Idea

The new visual flow is:

```text
lesson question data
  -> GameEngine reads the question
  -> QuestionVisual decides which picture to show
  -> FruitGroup draws the apples or bananas
```

So the config file controls the learning content, and the React components control how it appears on screen.

## 6. Important Files to Read First

Read in this order:

```text
src/config/lessonsConfig.js
src/components/ModuleMap.jsx
src/components/LessonCard.jsx
src/components/GameEngine.jsx
```

That order matches how the app thinks:

```text
What lessons exist?
How does the child pick a lesson?
How does one lesson button look?
How does the game show the question?
```
