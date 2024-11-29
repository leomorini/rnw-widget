# React Native Web Widget

This project enables the creation of multi-platform widgets, including **web widgets**, **browser extensions**, and **React Native libraries**. It is designed to provide flexibility and ease of use for developers aiming to integrate widgets into websites, browsers, or mobile applications.

## Features
- **Web Widget**: Create widgets for embedding in websites.
- **Browser Extension**: Build widgets for use as browser extensions (e.g., for Chrome).
- **React Native Library**: Package and publish your own React Native widget library to npm.

---

## Getting Started

Follow the steps below to clone the repository, install dependencies, and build widgets for your desired platform.

### 1. Clone the Repository
```bash
git clone <repository-url>
```

### 2. Install Dependencies
```bash
npm install or yarn install
```

### 3. Build for Your Platform
Choose the appropriate build command based on your target platform:

- Web Widget
  To create a web widget, run:
  ```bash
  yarn build:web
  ```
  - The generated files (CSS and JS) will be located in the /docs directory.
  - Main file: index.web.js.
 
- Browser Extension
  To create a browser extension, run:
  ```bash
  yarn build:extension
  ```
  - The generated files will be located in the /build directory.
  - Main file: index.extension.js.
 
- React Native Library (mobile)
To create and publish your React Native library, follow these steps:
  - Main file: index.js.
  - Configure the package for npm publication.
  - Run the following command:
  ```bash
  npm publish
  ```

