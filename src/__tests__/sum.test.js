import { sum } from "../Components/sum"

test("Adding Two Numbes", () => {
    const res = sum(12, 2)

    //Assertion
    expect(res).toBe(14);
})