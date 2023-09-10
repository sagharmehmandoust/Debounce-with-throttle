# Debounce and Throttle Functional Component

This is a TypeScript and React functional component that demonstrates how to implement debounce and throttle functionality for handling events such as scrolling or resizing.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Implementation](#implementation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Debouncing and throttling are techniques used to control the rate at which a function is executed in response to repeated events. This component provides a practical example of how to create debounced and throttled functions in a React application.

## Usage

To use this component in your React application, follow these steps:

1. Install the necessary dependencies, including React and TypeScript.

2. Import the `DebounceComponent` into your project.

3. Pass the `delay` prop to specify the debounce/throttle delay in milliseconds.

4. Attach the debounced and throttled functions to events as needed. In the provided example, we use `window.addEventListener` to demonstrate this with scroll and resize events.

5. Don't forget to clean up the event listeners to prevent memory leaks when the component unmounts.

Here's an example of how to use the `DebounceComponent`:

```jsx
import React from 'react';
import DebounceComponent from './DebounceComponent';

function App() {
  return (
    <div>
      <DebounceComponent delay={300} />
    </div>
  );
}

export default App;
