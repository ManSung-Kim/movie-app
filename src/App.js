import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Movies from './Movies';
import { useMediaQuery } from "react-responsive"
//import { Mobile/*,Tablet,Pc*/ } from './DeviceMediaQuery';


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


//class App extends React.Component {
function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoading: true,
  //     movies: []
  //   }
  //   //this.getMovies();
  // }

  // getMovies = async() => {
  //   const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  //   console.log(movies.data.data.movies);
    
  //   this.setState({movies: movies});
  //   console.log(this.state.movies);
  // }

  const isPc = useMediaQuery( {
    query : "(min-width:1024px)"
  });
  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });
  const isMobile = useMediaQuery({
    query : "(min-width:767px)"
  });

  // render() {
  //   //this.getMovies();
  //   // return (
  //   //   <div className="App">
  //   //     {/* <Food name="testfood"/> */}
  //   //     <Food name={this.movies}/>
  //   //   </div>
  //   // );
  //   return (
  //     <div class='container'>
  //       <div>
  //         {isPc && <p>Pc Mode</p>}
  //         {isTablet && <p>Tablet Mode</p>}
  //         {isMobile && <p>Mobile Mode</p>}
  //       </div>
  //       <Movies />
  //     </div>
  //   );
  // }

  const getDeviceType = () => {
    let dev = "Device is ";

    if(isPc) {
      dev += "PC";
    } else if(isTablet) {
      dev += "Tablet";
    } else if(isMobile) {
      dev += "Mobile";      
    } else {
      dev += "unknown";
    }

    //return <p>{dev}</p>;
    return dev;
  }

  return (
    <div>      
      <div class='responsivestate'>
        {getDeviceType()}
        {/*{isPc && <p>Pc Mode</p>}
        {isTablet && <p>Tablet Mode</p>}
        {isMobile && <p>Mobile Mode</p>} */}
        {/* <Mobile>
          <div className="mobile_container">
            <p>MOBILE</p>
          </div>
        </Mobile> */}
        {/* <Tablet>
          <div className="tablet_container">
            <p>Tablet</p>
          </div>
        </Tablet>
        <Pc>
          <div className="Pc_container">
            <p>Tablet</p>
          </div>
        </Pc> */}
      </div>
      <div class='container'>
        <Movies />
      </div>
    </div>
  );
}

export default App;
