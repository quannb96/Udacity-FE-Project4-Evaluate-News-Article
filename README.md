# Project: Evaluate a news article with Natural Language Processing

## What We will be building

We will develop a web tool that enables users to perform Natural Language Processing (NLP) on articles or blogs sourced from various websites. By leveraging the Semantic Analysis API from Meaning Cloud, we can create a user-friendly web interface to interact with their NLP system. This tool will provide relevant insights about the article, such as whether the content is subjective (opinion-based) or objective (fact-based).

# Technologies and Languages Used:

- Backend-Server:
  - ExpressJS(NodeJS)
  - Async/Await
- UI (Front-end):
  - Vanilla Javascript
  - Sass
  - HTML
- Tools:
  - Webpack
  - Git version Control System
  - Github
- Testing:
  - Jest

## Run project

Below shows how to run in development and production mode.

### Download Dependencies
`npm install`

### run in development mode

To start the webpack dev server at port 8000
` $ npm run build-dev`
Start back-end serve
`npm run start`

### run in production mode

Generate the dist files and then start server at port 8000
` $ npm run build-prod`
Start back-end serve
` $ npm run start`

## Configs files

- Webpack
  - Dev Configs: `webpack.config.dev.js`
    - Not optimized build
    - source map
  - Production `webpack.config.prod.js`
    - Optimized build
    - Auto generated HTML from template
- Dependency
  - `package.json`

## API

The project uses Semantic Text Analysis SDKs from [Meaning Cloud](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc), which provides a powerful and flexible AI-driven content analysis solutions.

## Testing

Testing is done with Jest. To run test, use the command
`npm run test`
