
# React Cmac Toaster

[![npm version](https://badge.fury.io/js/react-cmac-toaster.svg)](https://badge.fury.io/js/react-cmac-toaster)

A simple and customizable React toast notification library for easy toast management in your applications. This package provides context-based toasts without requiring external dependencies like Redux.

## Features
- Lightweight and easy to use
- Customizable toasts (width, color, duration, etc.)
- Supports both text messages and JSX elements
- No Redux required, uses React Context and Hooks
- Automatic timeout for toasts

## Installation

You can install this package using npm or yarn:

```bash
npm install react-cmac-toaster
```

or

```bash
yarn add react-cmac-toaster
```

## Usage

### 1. Setup the `ToastProvider`

First, wrap your application with the `ToastProvider` to make the toast system available across the app:

```tsx
import React from 'react';
import { ToastProvider } from 'react-cmac-toaster';

function App() {
  return (
    <ToastProvider>
      {/* Your app components go here */}
    </ToastProvider>
  );
}

export default App;
```

### 2. Triggering a Toast

You can trigger a toast anywhere in your app using the `useToast` hook.

```tsx
import React from 'react';
import { useToast } from 'react-cmac-toaster';

const ExampleComponent = () => {
  const toast = useToast();

  const showToast = () => {
    // Displaying a simple text message
    toast.open("This is a simple toast message!", {
      backgroundColor: "lightblue",
      color: "black",
      timeoutSeconds: 5000,
    });

    // Displaying a custom JSX element
    const customToast = () => (
      <div>
        <strong>Custom Toast:</strong> With a button!
        <button>Click me</button>
      </div>
    );
    toast.open(customToast, {
      backgroundColor: "lightgreen",
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
};

export default ExampleComponent;
```

### 3. Customizing Toasts

The `open` function accepts a message (which can be a string or JSX element) and an options object to customize the toast.

#### Available Options

| Option          | Type      | Default                        | Description                                                |
|-----------------|-----------|--------------------------------|------------------------------------------------------------|
| `toastWidth`    | `string`  | `"330px"`                      | Sets the width of the toast.                               |
| `toastMsgWidth` | `string`  | `"298px"`                      | Sets the width of the message area inside the toast.        |
| `backgroundColor`| `string` | `"#ffffff"`| Sets the background color of the toast.                     |
| `color`         | `string`  | `"#000000"`       | Sets the text color of the toast.                          |
| `timeoutSeconds`| `number`  | `3000`                         | Sets how long the toast should be visible (in milliseconds).|

### 4. Closing a Toast Programmatically

You can close a toast by using the `close` function, which takes the toast `id` as an argument:

```tsx
const toast = useToast();
toast.close(1); // Close the toast with id 1
```

### 5. Toast Lifecycle

Toasts automatically disappear after the `timeoutSeconds` duration. However, they can also be closed manually through the close button in the UI.

## Types

The following TypeScript types are available to help with integration:

### `Toast`

```ts
export interface Toast {
  id: number;
  message: string | (() => React.ReactNode);
  toastWidth?: string;
  toastMsgWidth?: string;
  backgroundColor?: string;
  timeoutSeconds?: number;
  color?: string;
}
```

### `ToastOptions`

```ts
export interface ToastOptions {
  toastWidth?: string;
  toastMsgWidth?: string;
  backgroundColor?: string;
  color?: string;
  timeoutSeconds?: number;
}
```

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes. Any contributions are welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
