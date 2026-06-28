# Dummy Login Changes

This file explains the dummy login added to the app.

## 1. New File: `LoginPage.jsx`

File added:

```text
src/components/LoginPage.jsx
```

What it does:

- Shows a username input.
- Shows a password input.
- Shows a `Play` button.
- Checks that both boxes have text.
- Sends the username back to `App.jsx` when login succeeds.

Important:

- This is not a real database login.
- Any non-empty username and password will work.
- The real database/authentication system can be added later.

## 2. `username`

Code idea:

```js
const [username, setUsername] = useState("");
```

What it does:

- Stores what the user types into the username box.

Beginner meaning:

- React remembers the username while the person is typing.

## 3. `password`

Code idea:

```js
const [password, setPassword] = useState("");
```

What it does:

- Stores what the user types into the password box.

Beginner meaning:

- React remembers the password text while the person is typing.

## 4. `error`

Code idea:

```js
const [error, setError] = useState("");
```

What it does:

- Stores the warning message.

Example:

```text
Type a name and password.
```

## 5. `handleSubmit`

File:

```text
src/components/LoginPage.jsx
```

What it does:

- Runs when the `Play` button is clicked.
- Stops the page from refreshing.
- Checks if username or password is empty.
- If either box is empty, it shows an error.
- If both boxes have text, it calls `onLogin`.

Important line:

```js
event.preventDefault();
```

Meaning:

- Forms normally refresh the page when submitted.
- This line stops that refresh so React can handle the login smoothly.

## 6. `onLogin`

What it does:

- `onLogin` is a function passed from `App.jsx` into `LoginPage.jsx`.
- `LoginPage.jsx` calls it when the dummy login succeeds.

Beginner meaning:

- The child component says, "Login worked."
- The parent component decides what screen to show next.

## 7. Updated File: `App.jsx`

File changed:

```text
src/App.jsx
```

What changed:

- `App.jsx` now stores whether someone is logged in.
- If nobody is logged in, it shows `LoginPage`.
- After login, it shows the normal app pages.

New state:

```js
const [loggedInUser, setLoggedInUser] = useState(null);
```

Meaning:

- `null` means nobody is logged in yet.
- A username means the dummy login has succeeded.

## 8. New App Flow

Before:

```text
App.jsx
  -> ModuleMap.jsx
  -> GameEngine.jsx
```

Now:

```text
App.jsx
  -> LoginPage.jsx
  -> ModuleMap.jsx
  -> GameEngine.jsx
```

## 9. Where Real Login Will Go Later

Later, the dummy check inside `handleSubmit` can be replaced with a real database or server check.

Current dummy check:

```js
if (!username.trim() || !password.trim()) {
  setError("Type a name and password.");
  return;
}
```

Future real check:

```text
Ask the backend/database if the username and password are valid.
```
