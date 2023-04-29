![coding](./coding.png)

<h1 align="center">DEVELOPER GUIDE</h1>

### Project Structure

```
my-react-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── NotFound.js
│   │   ├── TextForm.js
│   │   ├── TextView.js
│   │   └── UpdateText.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── serviceWorker.js
├── package.json
└── package-lock.json

```

### Table of Contents

-   [TextForm React Component](#textform-react-component)
    -   [Props](#props)
        -   [Written Codes](#written-codes)
-   [Home React Component](#home-react-component)
    -   [Dependencies](#dependencies)
    -   [Props](#props-1)
        -   [Written codes](#written-codes-1)
-   [TextView React Component](#textview-react-component)
    -   [Dependencies](#dependencies-1)
    -   [Props](#props-2)
        -   [Written codes](#written-codes-2)
-   [UpdateText Component](#updatetext-component)
    -   [Dependencies](#dependencies-2)
    -   [Props](#props-3)
        -   [Written codes](#written-codes-3)
-   [Header Component](#header-component)
-   [NotFound Component](#notfound-component)
-   [App Component](#app-component)

# TextForm React Component

The `TextForm` component is a reusable React component that provides a form with a text area and a submit button. It allows users to enter and submit text, with options for handling changes to the text and handling submission events.

## Props

The `TextForm` component accepts the following props:

**`textSnippet (optional)`**

An object that represents the text snippet to be displayed in the text area. This prop is optional, and if provided, the `defaultValue` of the `textarea`element will be set to the `content` property of the `textSnippet` object.

**`onSubmit (required)`**

A callback function that will be called when the form is submitted. This function should handle any necessary processing or validation of the text data and should be provided by the parent component.

**`onTextChange (optional)`**

A callback function that will be called when the text in the text area changes. This function should update the state or props of the parent component with the new text data.

**`buttonText (optional)`**

The text to display on the submit button. This prop is optional and defaults to "Submit" if not provided.

#### Written Codes

```javascript
import React from "react";

const TextForm = ({ textSnippet, onSubmit, onTextChange, buttonText }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">
                    <h3>Text Area: </h3>
                </label>
                <textarea
                    className="form-control"
                    id="text"
                    name="text"
                    rows="20"
                    onChange={onTextChange}
                    defaultValue={textSnippet?.content}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-dark my-3">
                {buttonText}
            </button>
        </form>
    );
};

export default TextForm;
```

# Home React Component

The `Home` component is a React component that provides a form for users to enter and submit text. It is used as the home page of an application and allows users to save text snippets to the backend API. And for comunicating with the backend it uses `fetch api` method.

## Dependencies

The `Home` component requires the following dependencies:

-   `React`
-   `react-router-dom`
-   `TextForm (custom component)`

## Props

The `Home` component does not accept any props.

#### Written codes

```javascript
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextForm from "./TextForm";
const apiUrl = process.env.REACT_APP_API_URL;

const Home = () => {
    const navigate = useNavigate();
    const [textSnippet, setTextSnippet] = useState(null);

    const saveText = async () => {
        const response = await fetch(`${apiUrl}/text/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(textSnippet),
        });
        const data = await response.json();
        navigate(`/t/${data.url}/`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveText();
    };

    const handleTextChange = (e) => {
        setTextSnippet({
            ...textSnippet,
            content: e.target.value,
        });
    };

    return (
        <div className="container mt-5">
            <TextForm
                textSnippet={textSnippet}
                onSubmit={handleSubmit}
                onTextChange={handleTextChange}
                buttonText="Save"
            />
        </div>
    );
};

export default Home;
```

The `Home` component handles changes to the text data using the `handleTextChange` function, and handles submission events using the `handleSubmit`function. The `saveText` function sends the text data to the backend API using a **POST** request and navigates to the new text snippet page using the navigate function from `react-router-dom`.

Note: The `apiUrl` variable is read from the `REACT_APP_API_URL` environment variable, which is defined in `.env` file.

# TextView React Component

The `TextView` component is a React component that displays a single text snippet and provides a button for editing the snippet. It is used as the page for displaying individual text snippets in an application.

## Dependencies

The TextView component requires the following dependencies:

-   `React`
-   `react-router-dom`
-   `TextForm (custom component)`

## Props

The `TextView` component does not accept any props.

#### Written codes

```javascript
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextForm from "./TextForm";
const apiUrl = process.env.REACT_APP_API_URL;

const TextView = () => {
    const { url } = useParams();
    const navigate = useNavigate();
    const [textSnippet, setTextSnippet] = useState(null);

    useEffect(() => {
        const fetchText = async () => {
            const response = await fetch(`${apiUrl}/text/${url}`);
            const data = await response.json();
            setTextSnippet(data);
        };
        fetchText();
    }, [url]);

    const handleEditClick = (e) => {
        e.preventDefault();
        navigate(`/t/${url}/edit/`);
    };

    return (
        <div className="container mt-5">
            <TextForm
                textSnippet={textSnippet}
                onTextChange={() => {}}
                onSubmit={handleEditClick}
                buttonText="Edit"
            />
        </div>
    );
};

export default TextView;
```

The `TextView` component uses the `useParams` hook from `react-router-dom` to read the `url` parameter from the URL path. It then uses the `useEffect` hook to fetch the text snippet data from the backend API and store it in the component state using the `setTextSnippet` function.

The `handleEditClick` function is called when the user clicks the "Edit" button in the `TextForm` component. It uses the `navigate` function from `react-router-dom` to navigate to the `TextEdit` component, passing the `url` parameter from the current URL as a prop.

# UpdateText Component

This component is responsible for updating a text snippet. It fetches the current text snippet data from the server and displays it in a `TextForm`. When the user submits the form, it sends a `PUT` request to the server with the updated text snippet data.

## Dependencies

The `UpdateText` component requires the following dependencies:

-   `React`
-   `react-router-dom`
-   `TextForm (custom component)`

## Props

The `UpdateText` component does not accept any props.

#### Written codes

```javascript
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextForm from "./TextForm";
const apiUrl = process.env.REACT_APP_API_URL;

const UpdateText = () => {
    const { url } = useParams();
    const navigate = useNavigate();
    const [textSnippet, setTextSnippet] = useState(null);

    useEffect(() => {
        const fetchText = async () => {
            const response = await fetch(`${apiUrl}/text/${url}`);
            const data = await response.json();
            setTextSnippet(data);
        };
        fetchText();
    }, [url]);

    const updateText = async () => {
        await fetch(`${apiUrl}/text/${url}/edit/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(textSnippet),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateText();
        navigate(`/t/${url}/`);
    };

    const handleTextChange = (e) => {
        setTextSnippet({
            ...textSnippet,
            content: e.target.value,
        });
    };

    return (
        <div className="container mt-5">
            <TextForm
                onSubmit={handleSubmit}
                onTextChange={handleTextChange}
                textSnippet={textSnippet}
                buttonText="Save"
            />
        </div>
    );
};

export default UpdateText;
```

It uses the `useParams` and `useNavigate` hooks from `react-router-dom` to get the URL parameter and navigate to a new page. It also uses the `useState` and `useEffect` hooks to manage state and perform side effects respectively.

The component fetches the existing text snippet from the server using the `fetch API` inside the `useEffect` hook. The fetched data is then stored in the `textSnippet` state using the `setTextSnippet` function.

When the form is submitted, the `handleSubmit` function is called, which prevents the default form submission and calls the `updateText` function to send a `PUT` request to the server to update the text snippet. The new text is taken from the `textSnippet` state using the `JSON.stringify` method to convert it to a JSON string. The PUT request is sent to the server using the `fetch API`.

The `handleTextChange` function updates the `textSnippet` state as the user types in the text field. The new text is taken from the `e.target.value` property of the event object and merged with the existing state using the spread operator. This updated state is then passed down to the `TextForm` component as a prop.

# Header Component

This is a React component called "Header" which displays a navigation bar at the top of the page. It imports the "Link" component from the "react-router-dom" library, which is used to create links to different pages within the application.

# NotFound Component

This is a simple React component for rendering a "404 Not Found" page. When a user navigates to a URL that doesn't match any of the defined routes in the application, this component is rendered to show an error message. The component displays a heading and a message informing the user that the requested page cannot be found.

# App Component

This is the main file of a React application that uses the React Router library to handle routing. It defines the routes for different pages/components of the application and renders them based on the URL.

Here's a breakdown of the code:

1. The `App` function is defined, which returns the main JSX code for the application.

2. The `Router` component from `react-router-dom` is used to define the router for the application.

3. The `Header` component is added as a child component to the `Router` component. This will render the Navbar on all pages of the application.

4. The `Routes` component is used to define the different routes for the application.

5. `Route` components are used to define the individual routes. The `path` prop specifies the URL path, and the `element` prop specifies the component to render when the path is matched.

6. The `Home` component is rendered when the root URL path is matched.

7. The `TextView` component is rendered when the URL path matches `/t/:url`, where `:url` is a variable parameter that can be accessed in the `TextView` component.

8. The `UpdateText` component is rendered when the URL path matches `/t/:url/edit`.

9. The `NotFound` component is rendered when none of the defined routes match the URL path. The `path="*"` prop ensures that this route will match all unmatched paths.

10. The `App` function is exported as the default export of the file. This allows other parts of the application to use the `App` component as the main component.
