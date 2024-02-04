import Contact from "../Components/Contact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


describe("Contact Us Test Case", () => {

    it("Should Load contact us component", () => {
        render(<Contact />)
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })

    it("Button is find in the contact us component", () => {
        render(<Contact />)
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })

    test("Placeholder is find in the contact us component", () => {
        render(<Contact />)
        const placeholder = screen.getByPlaceholderText("Name");
        expect(placeholder).toBeInTheDocument();
    })

    test("Should load 2 input box on the contact componnet ", () => {
        render(<Contact />)
        const inputBoxes = screen.getAllByRole("textbox");

        //Assertion
        expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(3);

    })

})


