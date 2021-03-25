import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
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
  
  // componentDidMount로 동작시키거나, 바인딩된 props,state 변경시에만 불리는 hook
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log('like didMount HOOK@app.js');
    //setBackgroundImage('https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/medium-cover.jpg');
    setBackgroundImageOpacity(1);
    setBackgroundGradient(true);
  }, []); 
  //두 번째 배열에 props나 state값을 넣을경우 
  //         --> 해당 값이 변경될때만 effect hook 호출
  //두 번째 배열에 아무것도 넣지않을 경우 
  //         --> 바인딩 감시가 필요없으므로 component가 mount될 때만 불림

  // componentDidMount와 componentDidUpdate와 비슷한 lifcyle을 갖는 Hook
  useEffect(() => {
    // 마운트, 렌더링마다 호출됨
    console.log('like didMount or didUpdate HOOK@app.js');
  });

  // componentWillUnmount와 비슷한 liftcycle을 갖는 Hook (함수 return을 넣어주면 됨)
  useEffect(() => {
    console.log('like didUnmount HOOK@app.js');
    return () => {
    }
  });

  const isPc = useMediaQuery( {
    query : "(min-width:1024px)"
  });
  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });
  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

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

    return dev;
  }

  const setBackgroundGradient = (isVisible) => {
    const bg = document.querySelector('.gradient-border');
    if(isVisible) {
      bg.backgroundImage = 'linear-gradient(60deg, #000000, #9b9bda, #a9a9a9, #a9a9a9, #a9a9a9)';
      console.log(isVisible + "vis " + bg.backgroundImage);
    } else {
      bg.backgroundImage = 'linear-gradient(60deg, #000000)';
    }
    console.log(isVisible + "vis " + bg.backgroundImage);
  }

  const setBackgroundImageOpacity = (opacity) => {
    const bg = document.querySelector('.background-change-wrap > div');
    bg.style.opacity = opacity;
  }

  const setBackgroundImage = (image) => {
    if(image == null)
      return;

    const bgImg = document.querySelector('.background-change-wrap > div > img');
    bgImg.src = image;
  }

  const handleScroll = (e) => { // scroll callback
     const changeBgSection = document.querySelector('.background-change-wrap');
     const { top: bgTop, height: bgHeight } = changeBgSection.getBoundingClientRect();
    var opacity = '1';
    if (bgTop < 0) {
      const rate = (-1) * bgTop / 4;
      setBackgroundImage('https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/medium-cover.jpg');
      opacity = `${(100 - rate / 5) / 100}`;
    } else {
      opacity = `1`;
    }

    setBackgroundImageOpacity(opacity);
    setBackgroundGradient(false);
  }

  return (
    <div>      
      <div class='responsivestate'>
        {getDeviceType()}
      </div>
      <div class='container'>
        <div class='background-change-wrap gradient-border'>
          <div>
            <img name='img-buffer-1'/>
          </div>
        </div>
      <Movies isMobile={isMobile}/>
      </div>
    </div>
  );
}

export default App;
