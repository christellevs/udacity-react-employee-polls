const { _saveQuestion } = require("../utils/_DATA.js");

describe("saveQuestion", () => {
  it("will return the question and all expected fields", async () => {
    const optionOneText = "Dogs";
    const optionTwoText = "Cats";
    const author = "christelle";

    var question = { optionOneText, optionTwoText, author };
    var result = await _saveQuestion(question);

    expect(result.author).toEqual(author);
    expect(result.optionOne.text).toEqual(optionOneText);
    expect(result.optionTwo.text).toEqual(optionTwoText);
  });

  it("will return error if the question is not found", async () => {
    const optionOneText = "Dogs";
    const optionTwoText = "Cats";

    var question = { optionOneText, optionTwoText };
    var result = await _saveQuestion(question).catch((e) => e);

    expect(result).toBe(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
