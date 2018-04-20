# Example showing a problem with Webdriver IO in watch mode


## The problem

The tests run fine in `"normal"` mode and the first time that they are run in `"watch"` mode. But the second time that
that the tests are run in `"watch"` mode wdio throws an error:

```
1) User listsuite1 should be able to sort:
Failed: An element could not be located on the page using the given search parameters.
running chrome
error properties: Object({ type: 'NoSuchElement', shotTaken: true })
Error: An element could not be located on the page using the given search parameters.
    at click(".sort.ascending") - at element(".sort.ascending") - click.js:12:17
```


## How to verify problem

1. Install dependencies with `npm install` or `yarn`
2. Type `npm run test` to run the tests in `"normal"` mode as many times as you like to see that there is no timing issue
3. Type `npm run test:watch` to run the tests in `"watch"` mode
  - Edit `./src/sort.e2e.js` by adding a newline at the bottom at the file. The tests should run for the first time and pass.
  - Edit `./src/sort.e2e.js` by adding another newline at the bottom at the file. The tests should run and fail. Redo this as many times as you like to see that there is no timing issue.
  - Press `ctrl + c` and rerun with `npm run test` to see that there is no problem with the test.
