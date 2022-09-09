const { _saveQuestion, _saveQuestionAnswer } = require("../utils/_DATA.js");

describe("_saveQuestion", () => {
  it("will return the question and all expected fields", async () => {
    const optionOneText = "Dogs";
    const optionTwoText = "Cats";
    const author = "christelle";

    var result = await _saveQuestion({ optionOneText, optionTwoText, author });

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

describe("_saveQuestionAnswer", () => {
  it("will return true if passed correctly formatted data", async () => {
    const authedUser = "mtsamis";
    const qid = "loxhs1bqm25b708cmbf3g";
    const answer = "optionTwo";

    var result = await _saveQuestionAnswer({ authedUser, qid, answer });

    expect(result).toBeTruthy();
  });

  it("will return error if passed incorrectly formatted data", async () => {
    const authedUser = "mtsamis";
    const qid = "loxhs1bqm25b708cmbf3g";
    const answer = null;

    var result = await _saveQuestionAnswer({ authedUser, qid, answer }).catch(
      (e) => e
    );

    expect(result).toBe("Please provide authedUser, qid, and answer");
  });
});
