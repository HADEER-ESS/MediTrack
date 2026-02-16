import { render, screen } from "@testing-library/react-native"
import ErrorText from "../src/components/ErrorText"
import COLORS from "../src/constant/colors"

describe("<ErrorText/>", () => {
    test("should display the error message", () => {
        render(<ErrorText msg="Error Here" type="error" />)

        expect(screen.queryByText("Error Here")).toBeOnTheScreen()
    })

    test("should have color RED when passed type is ERROR", () => {
        render(<ErrorText msg="Error Here" type="error" />)

        expect(screen.queryByText("Error Here")).toHaveStyle({ color: COLORS.ALERT })
    })

    test("should have color GREEN when passed type is SUCCESS", () => {
        render(<ErrorText msg="Success Here" type="success" />)

        expect(screen.queryByText("Success Here")).toHaveStyle({ color: COLORS.SECONDARY })
    })
})