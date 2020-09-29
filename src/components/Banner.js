import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import requests from "../api/request";

import "./Banner.css";

import BannerCard from "./BannerCard";
import Navbar from "../components/Navbar";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="main__container">
        {/* <Navbar /> */}
        <div className="banner__contents">
          <BannerCard
            CardPoster={`${base_url}${movie?.poster_path}`}
            CardTitle={movie?.title || movie?.name || movie?.original_name}
            CardDescription={movie?.overview}
          />
        </div>
      </div>
    </header>
  );
}

export default Banner;
