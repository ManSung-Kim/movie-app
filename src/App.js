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
    query : "(max-width:767px)"
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

  //var aa = 1.5;
  const handleScroll = (e) => { // scroll callback
    // const sections = document.querySelectorAll('section');
    // let value = window.pageYOffset / sections.offsetTop + 1;
    // sections.style = {
    //   transform:[]
    // };
    // //sections.style.transform  = 'scale(${value})';
    // sections.style.transform = 'scale(${aa})';
    // const scrollTop = e.srcElement.scrollingElement.scrollTop;
    // console.log();
    // // elems.forEach(elem => {
    // //     if(isElementUnderBottom(elem, -20)) { // 현재 시야보다 아래에 있을 때
    // //         elem.style.opacity = "0"; // 완전n 투명
    // //         elem.style.transform = 'translateY(70px)'; // 70px 아래에 이동하도록 효과
    // //     } else { // 현재와 동일선상 혹은 위에 위치할 때
    // //         elem.style.opacity = 1;
    // //         elem.style.transform = 'translateY(0px)'; // 제자리로 돌아오는 효과
    // //     }
    // // });
    const changeBgSection = document.querySelector('.background-change-wrap');
    const changeBgImg = document.querySelector('.background-change-wrap > div');
    const { top: bgTop, height: bgHeight } = changeBgSection.getBoundingClientRect();
    console.log(bgTop);
    if (bgTop < 0) {
      const rate = (-1) * bgTop / 4;
      //changeBgImg.style.filter = `grayscale(${rate}%)`;
      changeBgImg.style.opacity = `${(100 - rate / 5) / 100}`;
      //      
      const bgImg = document.querySelector('.background-change-wrap > div > img');
      bgImg.src = 'https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/medium-cover.jpg';
    } else {
      changeBgImg.style.filter = 'none';
      changeBgImg.style.opacity = `1`;
    }
  }

  window.addEventListener('scroll', handleScroll);

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
        <div class='background-change-wrap'>
          <div>
            <img name='img-buffer-1' 
              // src='https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg'
              />
          </div>
        </div>
          <Movies isMobile={isMobile}/>
      </div>
    </div>
  );
}

export default App;
