import { render, screen, cleanup, fireEvent, act } from "@testing-library/react";
import WatchLater from "./WatchLater";



beforeAll(() => {


    
    localStorage.removeItem("favMovies");
    localStorage.setItem("favMovies", JSON.stringify([436969, 581726, 685274]));


  });


test('It should render WatchLater',  async () => {
    
    
    
    await act( async () => render(<WatchLater/>));

    const movieTableSearchElement = screen.getByTestId('movielist-search-field')
    expect(movieTableSearchElement).toHaveAttribute("type", "text");
    expect(movieTableSearchElement).toBeInTheDocument()

    const movieTableRowElement = await screen.findAllByTestId('movierow')
    expect(movieTableRowElement.length).toBe(3);
    fireEvent.change(movieTableSearchElement, { target: { value: "squad" } });
    const movieTableSearchRowElement = await screen.getAllByTestId('movierow')
    expect(movieTableSearchRowElement.length).toBe(1);
    expect( await screen.findByText("The Suicide Squad")).toBeInTheDocument();

})





afterAll(() => {


    
    localStorage.removeItem("favMovies");


  });