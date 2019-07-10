import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';




class App extends Component {
  //default state 
  state = {
    greeting:"hi",
    
  }

  //after page loads
  componentDidMount(){
    //after render do something 
    // setTimeout(()=>{

    //   this.setState({
    //     //update state and RENDER again
    //     greeting:'Hello again!!',
        
    //   })

    // },5000) //set timer to 5000
    //like this 
    setTimeout(()=>{},1000)
    
    this._getMovies();
    

  }

  _renderMovies= () => {
    //returns <Movie /> <Movie /> etc...
    const movies = this.state.movies.map(movie=>{
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres = {movie.genres}
      synopsis = {movie.synopsis} />
    })
    return movies 
  }

  // ASYNC DATA I/O FUNCTION TO GET MOVIES 
  _getMovies= async () =>{

    const movies = await this._callApi()
    //render after set State
    this.setState({
      movies:movies
    })
  }

  _callApi=()=>{
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies) //dont have to return its automatic (if u have =>)
    .catch(err => console.log(err))
  }

  render(){
    const { movies } = this.state

    return(
      
      <div className={movies? "App" : "App--loading}"}>
       
       { movies ? this._renderMovies() :' page is Loading...'}

      </div>
    );
  }
}


export default App;
