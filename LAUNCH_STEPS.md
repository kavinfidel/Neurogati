# How to Launch This React Math App

This project currently has the app source code in `src/`, but it is not launchable yet.

Why? A React app needs a build tool to turn JSX files like `App.jsx` and `GameEngine.jsx` into JavaScript that the browser can run. The most beginner-friendly tool for this is Vite.

These steps explain what to do manually. Nothing here has been run automatically.

## Step 1: Open a Terminal in the Project Folder

Your project folder is:

```bash
/Users/kavinfidel/Desktop/project
```

In VS Code, you can usually open the terminal with:

```text
Terminal -> New Terminal
```

Then make sure you are inside the project folder:

```bash
cd /Users/kavinfidel/Desktop/project
```

## Step 2: Check That Node.js Is Installed

React tools run on Node.js.

Run:

```bash
node -v
```

If you see a version number, Node is installed.

Example:

```text
v22.12.0
```

If you get an error like `command not found`, install Node.js first from:

```text
https://nodejs.org
```

## Step 3: Create the Vite React Project Files

Your folder already has `src/App.jsx`, `src/components/`, `src/config/`, and `src/hooks/`.

What is missing is the Vite setup around it.

Run this command from inside `/Users/kavinfidel/Desktop/project`:

```bash
npm create vite@latest . -- --template react
```

Meaning:

- `npm create vite@latest` asks npm to use the latest Vite project creator.
- `.` means "create the project in this current folder".
- `--template react` means "make this a React project".

If Vite asks whether it can continue in a non-empty folder, choose yes.

Important: If it asks whether to overwrite files inside `src/`, be careful. You already have useful files there. Keep your existing `src/` files if prompted.

## Step 4: Install the Project Dependencies

After the Vite files exist, run:

```bash
npm install
```

This downloads React, Vite, and the other packages listed in `package.json`.

After this finishes, you should see a new folder called:

```text
node_modules/
```

## Step 5: Install Tailwind CSS for Vite

Your components use Tailwind classes like:

```text
rounded-3xl bg-slate-100 text-4xl
```

The browser will not understand those classes until Tailwind is installed and connected.

Run:

```bash
npm install tailwindcss @tailwindcss/vite
```

## Step 6: Configure Vite to Use Tailwind

Open or create this file:

```text
vite.config.js
```

Put this inside it:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Meaning:

- `react()` teaches Vite how to handle React.
- `tailwindcss()` teaches Vite how to process Tailwind classes.

## Step 7: Create the Tailwind CSS Entry File

Create this file if it does not exist:

```text
src/style.css
```

Put this inside it:

```css
@import "tailwindcss";
```

Meaning:

- This line tells Tailwind to generate all the CSS your React components need.

## Step 8: Make Sure React Starts from `main.jsx`

Create or open:

```text
src/main.jsx
```

It should look like this:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Meaning:

- `App` is your main app component.
- `style.css` brings Tailwind into the app.
- `root` is the HTML element where React places the app.

## Step 9: Make Sure `index.html` Has a Root Element

Open:

```text
index.html
```

It should contain this inside `<body>`:

```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

Meaning:

- `<div id="root"></div>` is the empty container React fills.
- The script line loads your React app.

## Step 10: Launch the App

Now run:

```bash
npm run dev
```

Vite should print a local address, usually:

```text
http://localhost:5173
```

Open that link in your browser.

## Step 11: What You Should See

You should first see the module map:

- Numbers Introduction
- Playful Addition
- Friendly Subtraction

Click an unlocked lesson.

Then the app should move into the game screen from:

```text
src/components/GameEngine.jsx
```

## Step 12: If Something Breaks

If the page is blank, check the terminal first. React errors usually appear there.

Common problems:

- Missing `src/main.jsx`
- Missing `src/style.css`
- Tailwind not added to `vite.config.js`
- `npm install` was not run
- You are not in `/Users/kavinfidel/Desktop/project`

## Mental Model

The launch chain is:

```text
index.html
  -> src/main.jsx
    -> src/App.jsx
      -> src/components/ModuleMap.jsx
      -> src/components/GameEngine.jsx
```

So the browser does not open `GameEngine.jsx` directly.

The browser opens `index.html`.

Then `index.html` loads `main.jsx`.

Then `main.jsx` loads `App.jsx`.

Then `App.jsx` decides whether to show the dashboard or the game.
