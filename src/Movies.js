import React,{Component} from 'react'
import axios from 'axios'

class Device extends Component {
    constructor(props) {
        super(props);
        console.log("device ctor");

    }

    state = {
        data:[],
    };
    
    getMyData = async() => {
        //const data = await axios.get('https://www.everdevel.com/ReactJS/axios/json/');
        // const data = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // console.log('data is ' + JSON.stringify(data));
        let data = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        data = data.data.data.movies;
        console.log('data is ' + JSON.stringify(data));
        this.setState({data});
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

    render() {
        console.log('is ' + JSON.stringify(this.state.data));
        return (
            <div>
                {
                    this.state.data.map((movies) => {
                        return <p key={movies.hash}>title:{movies.title}</p>;
                    })
                }
            </div>
        );
    }

}

export default Device;

