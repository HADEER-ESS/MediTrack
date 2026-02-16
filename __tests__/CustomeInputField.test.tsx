import { fireEvent, render, screen } from "@testing-library/react-native"
import CustomeInputField from "../src/components/CustomeInputField"
import { useState } from "react"

describe("<CustomeInputField />", () => {
    let press = jest.fn()

    test("component should diplay without any error message", () => {
        render(<CustomeInputField placeHolder="enter name" value="" error={false} action={press} />)

        expect(screen.queryByPlaceholderText("enter name")).toBeOnTheScreen()
        expect(screen.queryByText("This field is required")).toBeNull()
    })

    test("component should diplay with any error message", () => {
        render(<CustomeInputField placeHolder="enter name" value="" error={true} action={press} />)

        expect(screen.queryByPlaceholderText("enter name")).toBeOnTheScreen()
        expect(screen.queryByText("This field is required")).toBeOnTheScreen()
    })

    test("when text is changed, action is called with the new value", () => {
        render(<CustomeInputField placeHolder="enter name" value="" error={false} action={press} />)
        let input = screen.getByPlaceholderText("enter name")
        fireEvent.changeText(input, "Hello")


        expect(press).toHaveBeenCalledWith("Hello")
        expect(press).toHaveBeenCalledTimes
    })

    const TestWrapper = () => {
        const [val, setVal] = useState("");
        return (
            <CustomeInputField
                placeHolder="enter name"
                value={val}
                error={false}
                action={(text) => setVal(text)}
            />
        );
    };
    test("Displayed value correctly, when user fire even to change text", () => {
        render(<TestWrapper />)
        let input = screen.getByPlaceholderText("enter name")
        fireEvent.changeText(input, "Hello")


        expect(input?.props.value).toBe("Hello")
    })
})