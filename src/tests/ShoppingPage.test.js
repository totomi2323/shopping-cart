import React from "react";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import userEvent from "@testing-library/user-event";
import ShoppingPage from "../modules/Shop/ShoppingPage.js"


describe("Renders Shopping Page", () => {
    it("renders Shopping heading correctly", () => {
        const {getByRole} = render(<ShoppingPage/>);
        expect (screen.getByRole("heading").textContent).toMatch(/shopping page/i)
    })
})