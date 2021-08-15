import favMoviesServices from "./favMovies";

beforeAll(() => {


    
    localStorage.removeItem("favMovies");
    localStorage.setItem("favMovies", JSON.stringify([]));


  });



test('check if movie is favourite', () => {

   const checkFavMovieResult = favMoviesServices.checkFavMovie(436969);
   expect(checkFavMovieResult).toBe(false)

})


test('check if movie is added', () => {

     favMoviesServices.addFavMovie(436969);    
     const checkFavMovieResult = favMoviesServices.checkFavMovie(436969);
     expect(checkFavMovieResult).toBe(true)
 
 })

test('check if movie is removed', () => {
    
      favMoviesServices.removeFavMovie(436969);
      const checkFavMovieResult = favMoviesServices.checkFavMovie(436969);
      expect(checkFavMovieResult).toBe(false)
  
  })

test('toggle the movie ID - intgration test', () => {
     
       favMoviesServices.toggleFavMovie(436969);
       const checkFavMovieResult = favMoviesServices.checkFavMovie(436969);
       expect(checkFavMovieResult).toBe(true)
   
   })


test('check if movie is on the List',  () => {
     
    
    favMoviesServices.getFavMovies().then((result) => {

        const checkFavMovieResult = result.find(x => x.id === 436969)
        expect(checkFavMovieResult).not.toBeNull(true)

    });
    

    })



afterAll(() => {


    
    localStorage.removeItem("favMovies");


  });
