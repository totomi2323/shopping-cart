import React from "react";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import userEvent from "@testing-library/user-event";
import Checkout from "../modules/Chceckout";


describe("Renders Checkout Page", () => {
    it("renders Checkout page heading correctly", () => {
        const {getByRole} = render(<Checkout/>);
        expect (screen.getByRole("heading").textContent).toMatch(/checkout/i)
    })
})