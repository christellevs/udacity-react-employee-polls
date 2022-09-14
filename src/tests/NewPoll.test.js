import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store.js";
import NewPoll from "../components/NewPoll";

describe("NewPoll", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("will have all expected fields", () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );

    var placeholders = component.getAllByText(/Option/);
    expect(placeholders.length).toEqual(2);

    var optionOneInput = component.getByTestId("option-one-input");
    var optionTwoInput = component.getByTestId("option-two-input");

    expect(optionOneInput).toBeInTheDocument();
    expect(optionTwoInput).toBeInTheDocument();

    var submitPollButton = component.getByTestId("submit-poll-button");
    expect(submitPollButton).toBeInTheDocument();
  });

  it("it will display all fields correctly", () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );

    var optionOneInput = component.getByTestId("option-one-input");
    var optionTwoInput = component.getByTestId("option-two-input");

    fireEvent.change(optionOneInput, { target: { value: "Dogs" } });
    fireEvent.change(optionTwoInput, { target: { value: "Cats" } });

    expect(optionOneInput.value).toBe("Dogs");
    expect(optionTwoInput.value).toBe("Cats");
  });
});
