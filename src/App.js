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
    console.log('like didMount HOOK@app.js');
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

    //return <p>{dev}</p>;
    return dev;
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
      //changeBgImg.style.filter = 'none';
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
