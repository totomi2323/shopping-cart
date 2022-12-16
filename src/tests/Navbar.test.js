import React from "react";
import { render,screen , within} from "@testing-library/react";
import "@testing-library/jest-dom"; 
import userEvent from "@testing-library/user-event";
import NavBar from "../modules/Navbar";



describe("Renders NavBar Correctly", () => {
    it("Should render 4 list items with correct names", () => {
       render(<NavBar/>);
       const list = screen.getByRole("list", {name : "routes"})

       const {getAllByRole} = within(list);
       const listItems = getAllByRole("listitem");
       expect(listItems.length).toBe(4);

       const itemName = listItems.map((item) => {return item.textContent})
       expect(itemName).toEqual(["Logo","Home","Shop", "Checkout"])
    })
})