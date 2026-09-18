# jsClasses App

A small set of JavaScript exercises on classes and recursion, served by a minimal Express server. Written while working through the language fundamentals.

> Learning project from 2022. It is an exercise file collection, not an application.

## What is in here

| File | Topic |
| --- | --- |
| `js/classes.js` | Class syntax, constructors, methods |
| `js/calculate.js` | Basic calculation helpers |
| `js/fib.js` | Iterative Fibonacci |
| `js/fibRec.js` | Recursive Fibonacci |
| `js/fibClass.js` | Fibonacci wrapped in a class |

`index.html` loads the scripts, `server.js` serves the page.

## Tech stack

- Plain JavaScript, no framework
- Express
- dotenv

## Getting started

### Requirements

- Node.js
- yarn or npm

### Installation

```bash
yarn install
```

### Run locally

```bash
yarn server
```

The server listens on `http://localhost:8080` and also answers `GET /hello`.

Note that `server.js` reads `process.env.PORT` before it calls `dotenv.config()`, so the `PORT` value in `.env` never takes effect. The port only changes if it is set in the real environment.

## Status

Finished as an exercise and not maintained. Kept as a record of working through JavaScript classes and recursion.

## License

No open-source license has been declared yet. Until a license is added, reuse and redistribution are not granted by default.

Made with love by [Laflamme](https://github.com/lafllamme).
