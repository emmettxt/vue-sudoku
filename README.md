# vue-suduko

vue-suduko is a static sudoku site. It was built for the purpose of learning vue.

## Deploymnet

This site has been deployed to github pages and can be viewed here (https://emmettxt.github.io/vue-sudoku/)

## Dependencies

This project was built with minimal dependencies.

- [vue](https://vuejs.org/)
- [ress](https://github.com/filipelinhares/ress)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Data

The data for the sudoku boards is a subset of 10,000 boards from [9 Million Sudoku Puzzles and Solutions](https://www.kaggle.com/datasets/rohanrao/sudoku)
The boards are stored in db.json and the service ./src/services/sudokuServcice.ts mocks an api serving the boards, and checking solutions.
