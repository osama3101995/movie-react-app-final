import { render, screen, cleanup, fireEvent, act } from "@testing-library/react";
import MainMenu from "./MainMenu";
import App from "../../../App";


test('It should render MainMenu',  async () => {
    
    
    
    await act( async () => render(<App/>));
    await act( async () => render(<MainMenu/>));

    const menuButtonElement = screen.getAllByTestId('menubutton')
    expect(menuButtonElement[0]).toBeInTheDocument()

    fireEvent(
        menuButtonElement[0],
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }),
    )

    const menuBarElement = await screen.getByTestId('menubar')
    expect(menuBarElement).toBeInTheDocument()


})



