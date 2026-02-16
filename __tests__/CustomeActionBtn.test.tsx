import { fireEvent, render, screen } from "@testing-library/react-native"
import CustomeActionBtn from "../src/components/CustomeActionBtn"

describe("<CustomeActionBtn/>", () => {
    let fn = jest.fn()
    test("component display correctly, and display the passed text", () => {
        render(<CustomeActionBtn title="test" action={fn} />)

        expect(screen.queryByText("test")).toBeOnTheScreen()
    })

    test("component make its functionality in pressing action", () => {
        render(<CustomeActionBtn title="test" action={fn} />)
        let btn = screen.getByRole('button')

        fireEvent.press(btn)
        expect(fn).toHaveBeenCalledTimes(1)
    })
})