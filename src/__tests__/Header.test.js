import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Components/Header"
import { Provider } from "react-redux"
import appStore from "../Utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"



describe("Testing Header Component", () => {
    it("Should render header with login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>

        );

        //Assertion
        // const loginButton = screen.getByRole("button")
        const loginButton = screen.getByRole("button")
        expect(loginButton).toBeInTheDocument();
    })

    it("Should render header Logo image", () => {
        render(
            <BrowserRouter >
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const image = screen.getByRole("img");

        //Assertion
        expect(image).toBeInTheDocument();
    })

    it("It Should render Header Links", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const links = screen.getAllByRole("link")
        expect(links.length).toBe(5);
    })

    it("Should say that login/logout button working or not", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const loginButton = screen.getByRole("button", { name: "Login" })
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole("button", { name: "Logout" })
        expect(logoutButton).toBeInTheDocument()
    })
})