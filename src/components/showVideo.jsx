import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const ShowVideo = () => {

    const [video, setVideo] = useState([]);
    const { id } = useParams();

    const GetData = () => {
        axios.get(`http://localhost:4444/movie/${id}`).then((result) => {
            setVideo(result.data.movieData);
        })
    }

    useEffect(() => {
        // debugger;
        GetData();
    }, []);


    return (<div className="table-responsive text-center detailsDiv">
        <div className="videoContainer">
            <video className="videoStyle" controls autoPlay>
                <source src="http://localhost:3000/video/sample-4.mp4" type="video/mp4" />

            </video>
        </div>
        <p>Title: <strong>{video.title}</strong></p>
        <p> Description: {video.description}</p>
        <p> Genre: {video.genre}</p>
    </div>);
}

export default ShowVideo;