import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { store } from "../../store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Signin from "./Signin";

describe("Sign In Page Authentication", () => {
  it("SignIn Form", async () => {
    const handleGuestCredentials = jest.fn();
    let { baseElement } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Signin />
        </Provider>
      </BrowserRouter>
    );
    let guestCredBtn: any = baseElement.querySelector(
      '[data-guest="GUEST_CRED_SIGNIN"]'
    );
    let submitBtn: any = baseElement.querySelector(
      '[data-auth_signin="SIGN_IN"]'
    );

    await act(async () => {
      await fireEvent.click(guestCredBtn);
    });
   
    await act(async () => {
      await fireEvent.click(submitBtn);
    });

    let LOADER = screen.getAllByAltText("loader")[0];
    expect(LOADER).toBeInTheDocument();
  });
});
