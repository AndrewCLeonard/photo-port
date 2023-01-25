# Module 20: React

## Introduction to Module 20

### Roadmap

#### Skills

-   Build a single-page application with React.
-   Create reusable components within a React application.
-   Manage state within React components.
-   Pass props to child components.
-   Use React Hooks to manage state in functional components.
-   Conditionally render components based on updates to state.

#### What You'll Learn

-   Explain and identify the pros and cons of React single-page applications.
-   Explain and use React props.
-   Explain and use React state.
-   Explain and use React Hooks.
-   Use Jest to test React components.
-   Conditionally render components based on updates to state

### Getting Ready for Class

#### Deploy React App to GitHub Pages Video

### Up and Running

## Lesson 1: Create React Components

### 20.1.1: Introduction

### 20.1.2: Preview

1. Set Up the Project Using create-react-app
1. Create the GitHub Issues
1. Create the About Component
1. Create the Nav Component

### 20.1.3: Set Up the Project Using create-react-app

`npx create-react-app photo-port`

### 20.1.4: Create the GitHub Issues

#### Title: Initialize a React Application

Body: User Stories

-   As a user, I can see the About section.

-   As a user, I can see the Navigation menu.

#### Title: Create the Photo Gallery

Body: User Stories

-   As a user, I can click on a category and view the photos associated with the selected category.

-   As a user, when I click on a category, only photos associated with the selected category will be visible.

#### Title: Design the Contact Form

Body: User Stories

• As a user, I can enter my information into a form.

• As a user, I can submit the information.

#### Title: Create a Modal

Body: User Stories

-   As a user, I can select a thumbnail of a photo.

-   As a user, the selected photo is viewable in a modal.

### 20.1.5: Create the About Component

-   `App.js` = root component, wrapper component that houses all of the other components
-   Use PascalCase naming convention for React components
-   **JSX** represents HTML in JavaScript using webpack and React.
-   React components must always return a single parent JSX element. However, this element may have many children elements.

### 20.1.6: Create the Nav Component

-   `index.js` in the `src/` folder contains the statement that attaches React components to the DOM

### 20.1.: Reflection

Completed:

-   Created components that form a section of elements in the UI.
-   Learned how components are basically just functions.
-   Used JSX as a shorthand for creating elements.
-   Traced errors using React's error log.

Learned:

-   React is a js library for building reusable UI components
    -   components = functions that can take input and determine appearance of a section of the UI.
-   React creates a virtual DOM
    -   virtual DOM allows react to create a declarative UI, later resolved by ReactDOM to sync with actual DOM, meaning only components that changed need to be re-rendered.

## Lesson 2: Run Unit Tests Using the React Testing Library

### 20.2.1: Introduction

**unit testing** = a software development process in which the smallest testable parts of an application, called units, are individually and independently inspected for proper operation.

**React components** functions that can be passed into or returned from other functions

Goals:

-   Develop maintainable tests for a React component.
-   Formulate snapshots to compare the DOM node structures.
-   Query elements to verify visibility, content, and accessibility.
-   Explain the testing principles of the React Testing Library.

Be able to:

-   Summarize the testing principles of the React Testing Library.
-   Develop a test suite for a React component.
-   Formulate snapshot tests that inspect the DOM node structure.
-   Query elements to test visibility, text content, and accessibility.

### 20.2.2: Preview

Steps:

1. Set Up the Testing Environment
1. Create the About Component Tests
1. Create the Nav Component Tests

### 20.2.3: Set Up the Testing Environment

_Packages only used in the development environment for testing purposes saved as `devDependencies`. They aren't used for the application to function so aren't necessary in the production environment._

| package               | description                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| React Testing Library | provides functions that will help test React components, including the capacity to render components and query functions that can return DOM elements. |
| jest-dom package      | library that extends Jest with custom matchers to enable inspection of various parts of the DOM.                                                       |

### 20.2.4: Create the About Component Tests

The render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).

The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.

### 20.2.5: Create the Nav Component Tests

-   use `data-testid` attributes
-   the `@testing-library/jest-dom` package because includes jest matchers that allow assertions specific to the DOM, such as `toHaveTextContent`.

### 20.2.6: Reflection

## Lesson 3: Add Conditional Rendering to the Gallery

-   Use conditional rendering to display each page.
-   Introduce the concept of React Hooks.
-   Manage application state in React.

### 20.3.1: Introduction

### 20.3.2: Preview

1. Create a Gallery component.
2. Conditionally render the gallery pages
3. Display the photos.
4. Test the Gallery component.

### 20.3.3: Create the Gallery Component

### 20.3.4: Conditionally Render Gallery Pages

#### Using React Hooks

[docs](https://reactjs.org/docs/hooks-overview.html)
**React Hooks** manage state within a component.

-   only call Hooks from React functions
-   Only call Hooks at the top level. Don't use them inside `for` loops, nested functions, or conditionals
-   components are functions

```
import React, { useState } from "react" // destructuring import

function SomeComponent() {
  // `useState()` function always returns an array
  const [seconds, setSeconds] = useState(0) // item 1: value of the state. item 2: a `setter` which allows you to set state to something else. `0` is initial state

  function startStopwatch() {
    let updatedSeconds = seconds; // `setSeconds` is asynchronous, so `updatedSeconds keeps track of seconds in real time.
    setInterval(() => {
      updatedSeconds += 1;
      console.log(updatedSeconds);
      setSeconds(updatedSeconds); //  need to use `setSeconds`method, passing updated state as an argument to trigger re-render
    }, 1000);
  }

return (
  <div>
    {seconds}
    <button onClick={startStopwatch} >Start</button>
  </div>
)
}
```

#### Add Conditional Rendering to the Nav Component

if `currentCategory.name === category.name` then it will add the `navActive` class

```
<li className={`mx-1 ${currentCategory.name === category.name}`} key={category.name}>
```

This will render a `<div>` that says "Lyza!" Components are functions, so you can pass them arguments as attributes on the component in JSX.

```
function App() {
  return <Child somename="Lyza" ></Child>
}

function Child(props) {
  return <div>{props.somename}</div>
}
```



### 20.3.5: Display the Photos

### 20.3.6: Test the Gallery

### 20.3.7: Reflection

## Lesson 4: Add a Contact Form

### 20.4.1: Introduction

### 20.4.2: Preview

### 20.4.3: Create a Contact Form Component

### 20.4.4: Control State with a Controlled Component

### 20.4.5: Validate the Form Data

### 20.4.6: Add Conditional Rendering

### 20.4.7: Test the Component

### 20.4.8: Reflection

## Lesson 5: Add a Photo Modal

### 20.5.1: Introduction

### 20.5.2: Preview

### 20.5.3: Compose the Modal

### 20.5.4: Manage the Modal's state

### 20.5.5: Close the Modal

### 20.5.6: Implement the Modal Tests

### 20.5.7: Deploy the Website

### 20.5.8: Reflection

## Weekly Challenge

## React Challenge: React Portfolio

## Think Like a Developer

## Reflection and Retrieval

## Career Connection

## Dessert Menu
