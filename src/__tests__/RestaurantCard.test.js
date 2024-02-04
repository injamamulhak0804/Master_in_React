import RestoreCard from "./../Components/RestoreCard"
import { render, screen } from "@testing-library/react"
import MOCK_DATA from "./../mocks/resCarsMock.json"
import "@testing-library/jest-dom"
import { withColoured } from "./../Components/RestoreCard"
import { Restaurants } from './../Utils/useRestaurantCard'

describe("Should Load a Card Componenet", () => {
    it("should check the prop of a component", () => {
        render(<RestoreCard items={MOCK_DATA} />)

        const name = screen.getByText("Veena Stores")
        expect(name).toBeInTheDocument()
    })

    it("should render a restaurantCard componenet with promoted label", () => {
        const PromotedLabel = withColoured()
        render(<PromotedLabel items={MOCK_DATA} />)
        const label = screen.getByText("Promoted");
        expect(label).toBeInTheDocument();
    })
})