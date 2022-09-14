import { render } from "@testing-library/react";
import Leaderboard from "../components/Leaderboard";
import { Provider } from "react-redux";
import { store } from "../store.js";
import { BrowserRouter } from "react-router-dom";

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
});
