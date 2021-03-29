import React,{Component} from 'react'
import axios from 'axios'
//import { useMediaQuery } from "react-responsive"
import * as ScrollUtil from './ScrollUtil.js'

function isElementUnderBottom(elem, triggerDiff) {
    const {top} = elem.getBoundingClientRect(); 
        // 등록된 element의 Rect를 top으로 저장
    const {innerHeight} = window;
        // 현재 window를 innerHeight로 저장

    return top > innerHeight + (triggerDiff || 0); 
        // (현재 window + triggerDiff(예시로는 -20))보다 
        // element의 rect가 크냐? 
        // 크다 : 현재 window보다 elem이 아래에 위치하므로 true return
        // 작다 : 현재 window보다 elem이 같거나(맞나?) 위에 위치하므로 false return
}

class Movies extends Component {
    constructor(props) {
        super(props);
        console.log("device ctor");
        console.log(props.isMobile);
    }

    state = {
        data:[],
    };
    
    //getMyData = async() => {
    //getMyData = async function() {
    getMyData = async () => {
        //const data = await axios.get('https://www.everdevel.com/ReactJS/axios/json/');
        // const data = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // console.log('data is ' + JSON.stringify(data));
        let data;
        try {
        data = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        data = data.data.data.movies;
        } catch (err) {
            console.log(err);
        } finally {
            console.log('data is ' + JSON.stringify(data));
            this.setState({data});
            this.props.notifyInitialLoadingComplete();
        }

        // async fcn은 암묵적으로 Promise를 반환
    };
    
    //React Hook "useMediaQuery" cannot be called at the top level.
    // isPc = useMediaQuery( {
    //     query : "(min-width:1024px)"
    //   });
    //   isTablet = useMediaQuery({
    //     query : "(min-width:768px) and (max-width:1023px)"
    //   });
    //   isMobile = useMediaQuery({
    //     query : "(max-width:767px)"
    //   });

    componentDidMount() {
        console.log('in componentDidMount@Movie.js');
        this.getMyData();
    }
    componentDidUpdate() {
        console.log('in componentDidUpdate@Movie.js');
    }
    componentWillUnmount() {
        console.log('in componentWillUnmount@Movie.js');
    }

    getYutubeUrl(movieName) {
        return 'https://www.youtube.com/results?search_query=movie+' + movieName;
    }

    getRateString(rate) {
        var i;
        let ret;
        var mainStar = parseInt(rate/2);
        var subStar = rate%2;
        for(i = 0; i < mainStar; i++) {
            ret += '⭐';
        }
        ret += '☆';

        return ret;
    }

    // 왜 component의 함수로 집어넣으면 is not defined? 나중에 알아보기 210318
    // isElementUnderBottom(elem, triggerDiff) {
    //     const {top} = elem.getBoundingClientRect(); 
    //         // 등록된 element의 Rect를 top으로 저장
    //     const {innerHeight} = window;
    //         // 현재 window를 innerHeight로 저장
    
    //     return top > innerHeight + (triggerDiff || 0); 
    //         // (현재 window + triggerDiff(예시로는 -20))보다 
    //         // element의 rect가 크냐? 
    //         // 크다 : 현재 window보다 elem이 아래에 위치하므로 true return
    //         // 작다 : 현재 window보다 elem이 같거나(맞나?) 위에 위치하므로 false return
    // }
    
    handleScroll() { // scroll callback
        const elems = document.querySelectorAll('.up-on-scroll');
        elems.forEach(elem => {
            if(isElementUnderBottom(elem, -20)) { // 현재 시야보다 아래에 있을 때
                elem.style.opacity = "0"; // 완전 투명
                elem.style.transform = 'translateY(70px)'; // 70px 아래에 이동하도록 효과
            } else { // 현재와 동일선상 혹은 위에 위치할 때
                elem.style.opacity = 1;
                elem.style.transform = 'translateY(0px)'; // 제자리로 돌아오는 효과
            }
        });
    }

    render() {
        console.log('is ' + JSON.stringify(this.state.data));
        console.log('ismobile? ' + this.props.isMobile);
        //ScrollUtil.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
        return (
            <div class='movies'>
                {
                    this.state.data.map((movies) => {
                        return (
                            <div class={(this.props.isMobile ? "movie_mobile" : "movie") + " up-on-scroll"}>
                                <a class="movielink" href={this.getYutubeUrl(movies.title)} target="_blink">
                                    <img class="movieposter" src={movies.medium_cover_image}
                                        loading="lazy" alt={movies.title} title={movies.title} />
                                    {/* <div class="movieposter_gradation"></div> */}
                                </a>
                                <div class="moviesummary">
                                    <h1>{movies.title}</h1>
                                    <h4>{this.getRateString(movies.rating)}</h4>
                                    <h4>{movies.year}</h4>
                                    <div class="moviesynopsis">
                                        <p>{movies.synopsis}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

}

export default Movies;

