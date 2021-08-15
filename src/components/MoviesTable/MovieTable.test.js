import { render, screen, cleanup } from "@testing-library/react";
import MoviesTable from "./MoviesTable";


test('It should render MovieTable', () => {


    const movies = [{
        "adult": false,
        "backdrop_path": "/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 436969,
        "original_language": "en",
        "original_title": "The Suicide Squad",
        "overview": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
        "popularity": 9831.306,
        "poster_path": "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
        "release_date": "2021-07-28",
        "title": "The Suicide Squad",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1915
    }]


    render(<MoviesTable movies= {movies}/>)
    const appBarElement = screen.getByTestId('movie-row-436969')
    expect(appBarElement).toBeInTheDocument()


})



