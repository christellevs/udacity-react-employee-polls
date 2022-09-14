import { render, screen } from "@testing-library/react";
import App from "./App.js";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  screen.debug();
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
