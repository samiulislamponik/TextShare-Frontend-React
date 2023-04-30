# Text Sharing Web Application

A web application for sharing snippets of text, built with Django, Django REST Framework, and React.

### Table of Contents

-   [Text Sharing Web Application](#text-sharing-web-application)
    -   [Table of Contents](#table-of-contents)
    -   [Project Overview](#project-overview)
        -   [Backend-Repository](#backend-repository)
    -   [Technologies Used in Front-End](#technologies-used-in-front-end)
    -   [Features](#features)
    -   [Getting Started](#getting-started)
    -   [Usage](#usage)
    -   [API Endpoints](#api-endpoints)
    -   [Future Improvements](#future-improvements)
    -   [Contributing](#contributing)
    -   [Developer Documentation](#developer-documentation)
        -   [Frontend](#frontend)
    -   [Statement](#statement)
    -   [License](#license)

## Project Overview

The Text Sharing Web Application is a simple program that allows users to save and share text snippets. Users can enter the text into a text area and save it, and the text is stored in a persistent data store. The program generates a unique URL for each saved text snippet, which can be used to retrieve and edit the text.

#### [Backend-Repository](https://github.com/samiulislamponik/TextShare-Backend-Railway)

## Technologies Used in Front-End

-   React Js
-   Bootstrap

## Features

The following features are available in this web application:

-   Users can enter text into a text area and save it.
-   The saved text is stored in a persistent data store.
-   A URL is generated for the saved text which can be used to retrieve and edit the text.
-   When a user follows the URL, the saved text is displayed along with an option to edit the text.
-   When a user clicks the edit button, the text is copied and placed in the same interface used to create new text snippets.

## Getting Started

To get started with the Text Sharing Web Application, follow these steps:

1. Clone the repository: `git clone https://github.com/samiulislamponik/TextShare-Frontend-React.git`
2. Install the required dependencies: `node js`
3. Run the server: `npm start`
4. Navigate to http://localhost:3000/ in your web browser to access the application.

## Usage

To use this web application, follow these steps:

1. Open your web browser and navigate to [(TextShare)](https://text-share-zeta.vercel.app/).
2. Enter text into the text area.
3. Click the "Save" button to save the text.
4. A URL will be generated for the saved text.
5. To retrieve and edit the saved text, follow the URL and click the "Edit" button.
6. The saved text will be displayed and can be edited in the same interface used to create new text snippets.

## API Endpoints

The Text Sharing Web Application exposes the following API endpoints:

-   `POST https://web-production-a568.up.railway.app/text/`: Creates a new text snippet.
-   `PUT https://web-production-a568.up.railway.app/text/<str:url>/edit/`: Updates an existing text snippet.
-   `GET https://web-production-a568.up.railway.app/text/<str:url>/`: Retrieves an existing text snippet.

## Future Improvements

Some possible future improvements for the Text Sharing Web Application include:

-   Adding a URL copy section, so that user can copy the generated url by one click.
-   Handle errors, for example if user put the wrong url which isn't valid than app will redirect to page not found page.

## Contributing

If you'd like to contribute to this web application, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b <branch-name>`
3. Make your changes and commit them: `git commit -m '<commit-message>'`
4. Push your changes to your fork: `git push origin <branch-name>`
5. Create a pull request.

## Developer Documentation

`Note:` The functions used in the `written code` titles were not generated by framework templates.

#### [Frontend](URL)

## Statement

I have some familiarity with the `Django` web framework, specifically in creating web applications using templates, views, and models. However, I have not had the opportunity to work with the `Django Rest Framework (DRF)`, which is a powerful toolkit for building `APIs` in Django. Additionally, I have no prior experience with `React JS`, a front-end library utilized for building user interfaces and `single page applications (SPA)`.

## License

The Text Sharing Web Application is licensed under the MIT License. See LICENSE.txt for more information.
