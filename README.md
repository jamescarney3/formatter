# Formatter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The command used to build the project directory was `npx create-react-app formatter`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### Some Development Notes
- I decided to use React's state hooks and context API that it gives you for
  free to act as a store because spec was lightweight enough that it probably
  didn't justify adding a Redux or MobX implementation. The Context approach
  may have been overkill when I could have just passed some declared state and
  callback props from the top level App component directly to the pages, but I
  like how using a context provider allows for more abstraction and concern
  separation.
- I tested my utility formatting and parsing functions because I judged them as
  the most impactful things to test on the margin, but in an ideal world I would
  test some basic page logic as well. It's obviously useful to know when you've
  written something that breaks a page, but I also think that component tests
  can be a really good early warning system for when you're trying to add too
  much business logic to something that should be mainly compositional.
- To the previous point, when things start getting to complicated it can be good
  practice to move the offending logic into hooks where it's easier to test
  directly
