import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './common.css'

// import OrderList from "./orderList";


function DashBoard() {
    const history = useHistory();
    const [searchedText, setSearchedText] = useState("");

    const [movies, setMovies] = useState([]);

    const GetMovies = () => {
        axios.get("http://localhost:4444/movie/all").then((result) => {
            // console.log("movies", result);
            // debugger;
            setMovies(result.data.movieData);
            // console.log("fetch movies: ", movies);

        });
    }

    const GetGenre = (id) => {
        axios.get(`http://localhost:4444/movie/genre/${id}`).then((result) => {
            console.log("genre", result);
            debugger;
            setSearchedText(result.data.movieData[0].genre);
            console.log("fetch movies: ", searchedText);

        });
    }

    useEffect(() => {
        GetMovies();
    }, []);




    // const Signout = () => {
    //     sessionStorage.removeItem("isLoggedIn");
    //     sessionStorage.removeItem("userId");
    //     sessionStorage.clear();
    //     history.push("/");
    // }

    const OnSearchText = (args) => {
        setSearchedText(args.target.value);
    }

    const handleDivClick = (id) => {
        history.push(`/showVideo/${id}`)
    }

    const clearButton = () => {
        setSearchedText("");
    }


    return (<div className="container-fluid" >

        {/* <button className='btn btn-danger ' onClick={Signout}>Sign out</button> */}

        <div className="table-responsive">

            <table className="table text=center">

                <div className="videoContainer row" >

                    <video className="videoStyle" autoPlay muted loop>
                        <source src="http://localhost:3000/video/SampleVideo.mp4" type="video/mp4" />

                    </video>
                </div>


                <hr></hr>


                <div className="row">


                    <div className="col-md-10">
                        <div className="searchBoxContainer"  >
                            <center>
                                Search Video:
                                <input type='text' value={searchedText} onChange={OnSearchText} className="searchBox" />
                                <button className="btn" onClick={() => clearButton()}>Clear</button>
                            </center>
                        </div>


                        <h3>List of Videos</h3>

                        <tbody >{

                            Array.isArray(movies) && movies.map((movie) => {

                                if (movie.title.toLowerCase().includes(searchedText.toLowerCase()) ||
                                    movie.genre.toLowerCase().includes(searchedText.toLowerCase())) {

                                    return (
                                        <div className="wrapper">
                                            <center>
                                                <div className="grid-item">
                                                    <div key={movie.id} onClick={() => {
                                                        handleDivClick(movie.id)
                                                    }}>
                                                        <div className="description" >
                                                            <p>
                                                                <b>{movie.title}</b>


                                                            </p>
                                                            <p> {movie.description}</p>
                                                            <p> {movie.genre}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </center>
                                        </div>
                                    )
                                }
                                return null;
                            })
                        }</tbody>

                    </div>


                    <div className="genreDiv col-md-2">
                        <b>Select Genre</b>
                        {
                            Array.isArray(movies) && movies.map((movie) => {
                                return (
                                    <center>
                                        <div key={movie.id} onClick={() => {
                                            GetGenre(movie.id)
                                        }}>
                                            <div >
                                                <button className="btn"> #{movie.genre}</button>
                                            </div>
                                        </div>
                                    </center>
                                )
                                return null;
                            })
                        }

                    </div>


                </div>
                <div>

                </div>

            </table>
        </div >


    </div >);


}

export default DashBoard;