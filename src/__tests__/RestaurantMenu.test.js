import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../Components/RestaurantMenu"
import Header from "../Components/Header"
import { act } from "react-test-renderer"
import MOCK_DATA from "../mocks/mockResList.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../Utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

it("Should load  restaurant menu component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
    ))

    const accordianHeader = screen.getByText("Bath & Pongal (5)")
    fireEvent.click(accordianHeader)
    const itemLength = screen.getAllByTestId("foodItems").length

    // expect(itemLength).toBe(5)

    const addBtns = screen.getAllByRole("button", { name: "ADD +" })
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - 1 items")).toBeInTheDocument()

})

