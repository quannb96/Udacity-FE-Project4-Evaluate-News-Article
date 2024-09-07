const { isValidURL } = require("../js/urlChecker");

test("Test input URL validity", () => {
  expect(isValidURL("some string")).toBeFalsy();
  expect(isValidURL(55)).toBeFalsy();
  expect(isValidURL("$2314nj jn545 %%$$$ ")).toBeFalsy();
  expect(
    isValidURL(
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
    )
  ).toBeTruthy();
});
