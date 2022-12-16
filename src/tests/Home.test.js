import React from "react";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import userEvent from "@testing-library/user-event";
import Home from "../modules/Home";


describe("Renders Home Page", () => {
    it("renders Home page heading correctly", () => {
        const {getByRole} = render(<Home/>);
        expect (screen.getByRole("heading").textContent).toMatch(/home page/i)
    })
})