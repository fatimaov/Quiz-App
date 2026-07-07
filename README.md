# Quiz App

A programming quiz application built with React and Vite.

Users select a programming topic, complete a quiz, receive immediate feedback, and view their final score.

## Documentation

Project documentation can be found in the `docs` folder:

* PRD (Product Requirements Document)
* Architecture
* Roadmap

Please review these documents before starting work on any issue.

## Tech Stack

* React
* Vite
* CSS
* QuizAPI

## Requirements

* Node.js
* npm

This project uses `npm` as the package manager.

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root using `.env.example` as a reference.

```env
VITE_QUIZ_API_KEY=your_api_key_here
```

Access environment variables in the application using:

```js
import.meta.env.VITE_QUIZ_API_KEY
```

Note:

* Only variables prefixed with `VITE_` are exposed to frontend code.
* Never commit your `.env` file.

### Start the Development Server

```bash
npm run dev
```

To test the app from another device on the same local network, start the dev server with host binding:

```bash
npm run dev -- --host
```

## Project Structure

```txt
docs/
src/
public/
.env.example
package.json
vite.config.js
```

For the full application structure, refer to the Architecture document.

## Contributing

Before starting work:

1. Review the PRD, Architecture, and Roadmap documents.
2. Pick or assign yourself an issue.
3. Create a feature branch.
4. Open a Pull Request linked to the corresponding issue.

Please keep implementations aligned with the agreed scope and architecture.

## Current Scope

The current MVP includes:

* Topic selection
* Bundled quiz questions
* Quiz flow from Home to Results
* Immediate answer validation
* Question explanations
* Results screen
* Timer UI placeholder

For the complete scope, refer to the PRD.

