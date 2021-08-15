import { render, screen, cleanup, fireEvent, act } from "@testing-library/react";
import MovieList from "./MovieList";
import getMovies from "../../services/movies/getMovies";
import * as movieData from "../../assets/mock-movies.json";

jest.mock("../../services/movies/getMovies");

test('It should render MovieList',  async () => {
    
    
    getMovies.mockResolvedValueOnce(movieData)
    
    await act( async () => render(<MovieList/>));

    const movieTableSearchElement = screen.getByTestId('movielist-search-field')
    expect(movieTableSearchElement).toHaveAttribute("type", "text");
    expect(movieTableSearchElement).toBeInTheDocument()

    fireEvent.change(movieTableSearchElement, { target: { value: "squad" } });
    const movieTableRowElement = screen.getAllByTestId('movierow')
    expect(movieTableRowElement.length).toBe(1);
    expect( await screen.findByText("The Suicide Squad")).toBeInTheDocument();
    //screen.debug();

})



