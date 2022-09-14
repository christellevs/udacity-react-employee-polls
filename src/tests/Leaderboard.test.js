import * as React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store.js";
import Leaderboard from "../components/Leaderboard";

describe("Leaderboard", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Leaderboard />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("it will display all fields correctly", () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Leaderboard />
        </BrowserRouter>
      </Provider>
    );

    var userColumn = component.getByTestId("user-column");
    var answeredColumn = component.getByTestId("answered-column");
    var createdColumn = component.getByTestId("created-column");
    var totalColumn = component.getByTestId("total-column");

    expect(userColumn).toBeInTheDocument();
    expect(answeredColumn).toBeInTheDocument();
    expect(createdColumn).toBeInTheDocument();
    expect(totalColumn).toBeInTheDocument();
  });
});
