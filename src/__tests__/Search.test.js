import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Components/Body"
import MOCK_DATA from "../mocks/mockRestData.json"
import { act } from "react-test-renderer"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

describe("It Should test the Search component", () => {

    it("Should render the body component with heading", async () => {
        await act(async () => render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ))
        const heading = screen.getByText("Restaurants with online food delivery in Chennai");
        expect(heading).toBeInTheDocument();
    })

    // it("Should render body componenet with input Box functioality", async () => {
    //     await act(async () => {
    //         render(
    //             <BrowserRouter>
    //                 <Body />
    //             </BrowserRouter>
    //         )
    //     })
    //     const cardBeforeSearch = screen.getAllByTestId("resCard")
    //     expect(cardBeforeSearch.length).toBe(9)
    //     const inputBox = screen.getByTestId("inputBox")
    //     const searchBtn = screen.getByRole("button", { name: "Search" })
    //     fireEvent.change(inputBox, { target: { value: "Kaapi Katte" } })
    //     fireEvent.click(searchBtn)
    //     const cardAfterSearch = screen.getAllByTestId("resCard")
    //     expect(cardAfterSearch.length).toBe(1)
    // })


    // it("Should check the functionality of top rated restaurant", async () => {
    //     await act(async () => render(
    //         <BrowserRouter>
    //             <Body />
    //         </BrowserRouter>
    //     ))
    //     // const cardsBeforeClick = screen.getAllByTestId("resCard")
    //     // expect(cardsBeforeClick.length).toBe(9)
    //     const filterBtn = screen.getByRole("button", { name: "Top Rated Resturant" })
    //     fireEvent.click(filterBtn);
    //     //After Click
    //     const cardsAfterClick = screen.getAllByTestId("resCard");
    //     console.log(cardsAfterClick);
    //     expect(cardsAfterClick.length).toBe(4)
    // })


    // it("Should Check the Search function", async () => {
    //     await act(async () => render(
    //         <BrowserRouter>
    //             <Body />
    //         </BrowserRouter>
    //     ))

    //     const cardBeforeSearch = screen.getAllByTestId("resCard")
    //     expect(cardBeforeSearch.length).toBe(9)
    //     const inputBox = screen.getByTestId("inputBox")
    //     const searchBtn = screen.getByRole("button", { name: "Search" })
    //     fireEvent.change(inputBox, { target: { value: "Kaapi Katte" } })
    //     fireEvent.click(searchBtn)
    //     const cardAfterSearch = screen.getAllByTestId("resCard")
    //     expect(cardAfterSearch.length).toBe(1)
    // })

    //it("Should check the functionality of top rated restaurant", async () => {
    //         await act(async () => render(
    //             <BrowserRouter>
    //                 <Body />
    //             </BrowserRouter>
    //         ))
    //         const cardsBeforeClick = screen.getAllByTestId("resCard")
    //         expect(cardsBeforeClick.length).toBe(9)
    //         const filterBtn = screen.getByRole("button", { name: "Top Rated Resturant" })
    //         fireEvent.click(filterBtn);
    //         //After Click
    //         const cardsAfterClick = screen.getAllByTestId("resCard");
    //         console.log(cardsAfterClick);
    //         expect(cardsAfterClick.length).toBe(4)
    //     })

})
