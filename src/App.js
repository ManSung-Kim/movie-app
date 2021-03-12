import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Device from './Device';

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hello",
    };
  }

  render() {
    const name = this.props.name;
    return (
      <div>
        <button title={name}>
          {name}
        </button>
      </div>
    );
  }
}

// getMovies = async () => {
//   const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");  
// }

// getMovies = async function() {
//   const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");  
//   return movies;
// }


// async getMoviesAsync() {
//     const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
// }

// function App() {
//   return (
//     <div className="App">
//       <Food name={getMovies.data.data.movies}/>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: []
    }
    //this.getMovies();
  }

  // getMovies = async() => {
  //   const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  //   console.log(movies.data.data.movies);
    
  //   this.setState({movies: movies});
  //   console.log(this.state.movies);
  // }

  render() {
    //this.getMovies();
    // return (
    //   <div className="App">
    //     {/* <Food name="testfood"/> */}
    //     <Food name={this.movies}/>
    //   </div>
    // );
    return (
      <div>
        <Device />
      </div>
    );
  }
}

export default App;
