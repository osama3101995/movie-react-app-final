import { render, screen, cleanup } from "@testing-library/react";
import MainAppBar from "./AppBar";


test('it should render MainAppBar', () => {
    render(<MainAppBar/>)
    const appBarElement = screen.getByTestId('appbar')
    expect(appBarElement).toBeInTheDocument()
})