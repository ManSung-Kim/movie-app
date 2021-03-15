import React,{Component} from 'react'
import axios from 'axios'

class Movies extends Component {
    constructor(props) {
        super(props);
        console.log("device ctor");

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
        }

        // async fcn은 암묵적으로 Promise를 반환
    };

    componentDidMount() {
        console.log('in componentDidMount');
        this.getMyData();
    }
    componentDidUpdate() {
        console.log('in componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('in componentWillUnmount');
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

    render() {
        console.log('is ' + JSON.stringify(this.state.data));
        return (
            <div class='movies'>
                {
                    this.state.data.map((movies) => {
                        return (
                            <div class="movie">
                                <a class="movielink" href={this.getYutubeUrl(movies.title)} target="_blink">
                                    <img class="movieposter" src={movies.medium_cover_image} 
                                        loading="lazy" alt={movies.title} title={movies.title}/>
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

