import * as React from "react";
import { render } from "@testing-library/react";
import App from "../App.js";
import { Provider } from "react-redux";
import { store } from "../store.js";
import { BrowserRouter } from "react-router-dom";

test("renders app", () => {
  var component = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
