import React from "react";
import request from "../../api/request";

// UI Component
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import Nav from "../../components/Nav";

import "./HomeView.css";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Banner />
      <div className="main__container">
        <Row title="Trending Now" fetchUrl={request.fetchTrending} isLargeRow />
        <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
        <Row
          title="Netflix Originals"
          fetchUrl={request.fetchNetflixOriginals}
        />
        {/* <Row title="Action  Movies" fetchUrl={request.fetchedActionMovies} /> */}
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        {/* <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} /> */}
        <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
        {/* <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} /> */}
      </div>
    </div>
  );
};

export default Home;
