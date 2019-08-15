import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom";
import api from '../api';


function GameStreams({match, location }) {

    const [streamData, setStreamData] = useState([]);
    const [viewers, setViewers] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get(`https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`);
            let dataArray = result.data.data;
            let finalArray = dataArray.map(stream => {
                let newURL = stream.thumbnail_url.replace("{width}", "300").replace("{height}", "300");
            stream.thumbnail_url = newURL;
            return stream;

            });

            let totalViewers = finalArray.reduce((acc, val) => {
                return acc + val.viewer_count;
            }, 0);

            setViewers(totalViewers);
            setStreamData(finalArray);
        };

        fetchData()
        
    }, []);

    return (
        <div>

<h1 className="text-center text-white">{match.params.id} Streams</h1>
      <h3 className="text-center">
        <strong className="text-primary">{viewers}</strong><span className="text-white"> people currently
        watching  {match.params.id} </span>
      </h3>
      <div className="row">
        {streamData.map(stream => (
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 mt-5">
          <div className="card">
              <img className="card-img-top" src={stream.thumbnail_url} />
          <div className="card-body">
                <h5 className="card-title">{stream.user_name}</h5>
          <div className="card-text">
                  {stream.viewer_count} live viewers
          </div>
               <button className="btn btn-dark">
                  
                  <Link className="link" to={`/embed/${stream.user_name}`}>Watch {stream.user_name}'s stream</Link>
              </button>
          </div>
          </div>
          </div>
        ))}
      </div>
      
    </div>

    );
 
}

export default GameStreams;